import React, { useState, useEffect, useRef } from "react"
import { checkStatus } from "../../tools"

const url = "https://api.github.com/users"

export const UseEffectBasic = () => {
	const [count, setCount] = useState(() => false)

	const renderTimes = useRef(1)

	const increment = () => setCount(prevCount => prevCount + 1)

	const decrement = () => setCount(prevCount => prevCount - 1)

	const resetCount = () => setCount(prevCount => prevCount - prevCount)

	// effect for increased rendered times
	useEffect(() => {
		if (typeof count === "number") {
			document.title = `${count ? `(${count}) ` : ""}React App`
			console.log("re-rendered")
		} else {
			console.log("rendered")
		}
		renderTimes.current += 1
	}, [count])

	// effect for negative value
	useEffect(() => {
		setTimeout(() => {
			count < 0 &&
				alert(
					`Your Number is  ( ${count} )
and that is a Negative Number.
reset your number or increase ${Math.abs(count)} times
so that your number becomes absolute.`
				)
		}, 500)
	}, [count])

	return (
		<>
			<section style={{ margin: "4rem 0" }}>
				<h2>UseEffect Basics</h2>
				<h3>this page is rendered {renderTimes.current} times.</h3>
				<h1>{!count ? 0 : count}</h1>

				<button className='btn' onClick={decrement}>
					Decrease
				</button>
				<button className='btn' onClick={resetCount}>
					Reset
				</button>
				<button className='btn' onClick={increment}>
					Increase
				</button>
			</section>
			<button className='btn' onClick={() => alert("hello world")}>
				Dummy Button
			</button>
		</>
	)
}

export const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth)

	const checkSize = () => setSize(window.innerWidth)

	useEffect(() => {
		window.addEventListener(
			"resize",
			checkSize
			// () => setSize(prevSize => prevSize - prevSize + window.innerWidth)
		)
		return () => window.removeEventListener("resize", checkSize)
	}, [])

	return (
		<>
			<h1>Window</h1>
			<h2>{size}px</h2>
		</>
	)
}

// useEffect | Fetch Data + multiple returns
export const UseEffectFecthData = () => {
	const [isLoding, setIsLoding] = useState(true)
	const [isError, setIsError] = useState(false)
	const [users, setUsers] = useState([])

	const getUsers = async () => {
		const check = await checkStatus(url).catch(err => console.log(err))

		check && setUsers(check)

		setIsError(curr => (check ? curr : !curr))

		setTimeout(() => {
			setIsLoding(curr => !curr)
		}, 500)
	}

	useEffect(() => {
		getUsers()
	}, [])

	const getUsersList = () =>
		users.map(user => {
			const { id, avatar_url, html_url, login } = user

			return (
				<li key={id}>
					<img src={avatar_url} alt={login} />
					<div>
						<a href={html_url}>{login}</a>
					</div>
				</li>
			)
		})

	if (isLoding) {
		return <h1>Loading....</h1>
	}
	if (isError) {
		return (
			<>
				<h2>Something went wrong...</h2>
				<h3>check your console....</h3>
			</>
		)
	}
	return (
		<>
			<h3>GitHub Users</h3>
			<ul className='users'>{getUsersList()}</ul>
		</>
	)
}

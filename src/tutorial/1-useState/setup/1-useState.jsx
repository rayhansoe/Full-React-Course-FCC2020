import React, { useState } from "react"
import { data } from "../../../data"

export const UseStateBasics = () => {
	const state = useState(1)
	return (
		<>
			<h1>Basic UseState</h1>
			{console.log(state[0])}
			{console.log(state[1])}
			{console.log(state[1](1))}
		</>
	)
}

export const UseStateArray = () => {
	const [people, setPeople] = useState(() => data)

	const removeItems = () => setPeople(() => [])

	const resetItems = () => setPeople(prevPeople => prevPeople.splice(0, prevPeople.length, ...data))

	const removeItem = id => {
		setPeople(prevPeople => prevPeople.filter(person => person.id !== id))
	}

	const peopleList = people.map(person => {
		const { id, name } = person

		return (
			<div className='item' key={id}>
				<h2>{name}</h2>
				<button onClick={() => removeItem(id)}>remove</button>
			</div>
		)
	})

	const RenderButtons = () =>
		!people.length ? (
			<button className='btn' onClick={resetItems}>
				Reset Items
			</button>
		) : people.length < 4 ? (
			<>
				<button className='btn' onClick={removeItems}>
					Remove Items
				</button>
				<button className='btn' onClick={resetItems}>
					Reset Items
				</button>
			</>
		) : (
			<button className='btn' onClick={removeItems}>
				Remove Items
			</button>
		)

	return (
		<>
			{/* <h1>UseState Array Example</h1> */}
			{peopleList}
			<RenderButtons />
		</>
	)
}

export const BasicCounter = () => {
	const [count, setCount] = useState(() => 0)

	const increment = () => setCount(prevCount => count + 1)

	const increaseLater = () =>
		setTimeout(() => {
			setCount(prevCount => count + 5)
		}, 2000)

	const decrement = () => setCount(prevCount => count - 1)

	const resetCount = () => setCount(prevCount => count - count)

	return (
		<>
			<section style={{ margin: "4rem 0" }}>
				<h2>Regular Counter</h2>
				<h1>{count}</h1>
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

			<section style={{ margin: "4rem 0" }}>
				<h2>More Complex Counter</h2>
				<h1>{count}</h1>
				<button className='btn' onClick={increaseLater}>
					Increase 5 Times Later
				</button>
			</section>
		</>
	)
}

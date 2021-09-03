import React, { useEffect, useReducer, useRef } from "react"

import { reducer } from "./reducer"
import { checkStatus } from "../../tools"

import MyItem from "./component/MyItem"
import MyInput from "./component/MyInput"

// default state
const defaultState = {
	isFetchLoading: false,
	isError: false,
	users: [],
	url: "",
	isPageLoading: true,
}

// main component
const UseReducerTopic = () => {
	const [state, dispatch] = useReducer(reducer, defaultState)
	const inputRef = useRef(null)

	const handleSubmit = e => {
		e.preventDefault()
		if (inputRef.current.value) {
			dispatch({
				type: "ADD_URL",
				payload: {
					url: inputRef.current.value,
				},
			})
			dispatch({
				type: "FETCH_STATUS",
				payload: {
					isFetchLoading: true,
				},
			})
		}
	}

	const handleClick = id => {
		dispatch({
			type: "REMOVE_USER",
			payload: {
				id,
			},
		})
	}

	// user list
	const getUsersList = () =>
		state.users.map(user => {
			return <MyItem key={user.id} user={user} handleClick={handleClick} />
		})

	// the side effect for data fetching
	useEffect(() => {
		const getUsersData = async () => {
			const result = await checkStatus(state.url).catch(err => console.log(err))
			result &&
				dispatch({
					type: "FIRST_RENDER",
					payload: { users: result },
				})

			!result &&
				dispatch({
					type: "ERROR_FETCHING",
					payload: {
						isError: true,
					},
				})

			setTimeout(() => {
				dispatch({
					type: "FETCH_STATUS",
					payload: {
						isFetchLoading: false,
					},
				})
			}, 500)
		}

		const reFetchData = async () => {
			const result = await checkStatus(state.url).catch(err => console.log(err))
			result &&
				dispatch({
					type: "RE-FETCH",
					payload: { users: result },
				})

			!result &&
				dispatch({
					type: "ERROR_FETCHING",
					payload: {
						isError: true,
					},
				})

			setTimeout(() => {
				dispatch({
					type: "FETCH_STATUS",
					payload: {
						isFetchLoading: false,
					},
				})
			}, 500)
		}

		if (!state.users.length && state.url) {
			getUsersData()
		} else if (state.users.length < 30 && state.users.length !== 0 && state.isFetchLoading) {
			reFetchData()
		}
	}, [state.isFetchLoading, state.isPageLoading, state.url, state.users.length])

	// when the page still loading
	if (state.isPageLoading) {
		setTimeout(() => {
			dispatch({ type: "LOADING_FINISHED", payload: { isPageLoading: false } })
		}, 500)
		return (
			<>
				<h1>Loading....</h1>
			</>
		)
	}

	// when the page is error
	if (state.isError) {
		return (
			<>
				<h2>Something went wrong...</h2>
				<h3>check your console....</h3>
			</>
		)
	}

	// when the loading is finished
	return (
		<>
			<h3 style={{ marginBottom: "40px" }}>UseEffect | UseReducer | UseRef | Fetch</h3>
			<p>url : https://api.github.com/users</p>
			<section>
				<form className='form' onSubmit={handleSubmit}>
					<MyInput
						nameForId='url'
						status={state.url ? true : false}
						label='Url : '
						ref={inputRef}
						type='url'
					/>
					<button
						type='submit'
						disabled={state.users.length === 30 && state.users.length !== 0 ? true : false}
						onClick={handleSubmit}>
						{state.users.length <= 30 && state.users.length !== 0 ? "re-fetch" : "add url"}
					</button>
				</form>
			</section>
			<section>
				{state.isFetchLoading ? (
					<h3>Loading...</h3>
				) : (
					state.url && (
						<>
							<h3>GitHub Users</h3>
							<ul className='users'>{getUsersList()}</ul>
						</>
					)
				)}
			</section>
		</>
	)
}

export default UseReducerTopic

import React, { useEffect, useReducer } from "react"
import { checkStatus } from "../../tools"

const url = "https://api.github.com/users"

// reducer function.
const reducer = (state, action) => {
	switch (action.type) {
		case "FIRST_RENDER":
			// const newUsers = [...state.users, ...action.payload.users]
			return {
				...state,
				users: [...state.users, ...action.payload.users],
			}

		case "ERROR_FETCHING":
			return {
				...state,
				isError: action.payload.isError,
			}

		case "LOADING_FINISHED":
			return {
				...state,
				isLoading: action.payload.isLoading,
			}

		default:
			throw new Error("no matching action type")
	}
}

// default state
const defaultState = {
	isLoading: true,
	isError: false,
	users: [],
}

// main component
const UseReducerTopic = () => {
	const [state, dispatch] = useReducer(reducer, defaultState)

	// user list
	const getUsersList = () =>
		state.users.map(user => {
			const { id, avatar_url, html_url, login } = user

			return (
				<li key={id}>
					<a href={html_url} target='_blank' rel='noreferrer'>
						<img src={avatar_url} alt={login} />
					</a>
					<div>
						<a href={html_url} target='_blank' rel='noreferrer'>
							{login}
						</a>
					</div>
				</li>
			)
		})

	// the side effect for data fetching
	useEffect(() => {
		const check = async () => {
			const result = await checkStatus(url).catch(err => console.log(err))
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
					type: "LOADING_FINISHED",
					payload: {
						isLoading: false,
					},
				})
			}, 500)
		}
		!state.users.length && check()
	}, [state.users.length])

	// when the page is loading
	if (state.isLoading) {
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
			<h3>GitHub Users</h3>
			<ul className='users'>{getUsersList()}</ul>
		</>
	)
}

export default UseReducerTopic

import React, { useEffect, useReducer } from "react"

import { checkStatus } from "../../tools"
import MyItem from "./component/MyItem"

import { reducer } from "./reducer"

const url = "https://api.github.com/users"

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
			return <MyItem key={user.id} user={user} />
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

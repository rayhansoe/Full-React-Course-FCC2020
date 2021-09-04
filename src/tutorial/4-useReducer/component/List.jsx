/* eslint-disable no-unused-vars */
import React, { useContext } from "react"
import { StateContext } from "../UseReducerTopic"
import MyItem from "./MyItem"

const List = () => {
	const [state, dispatch] = useContext(StateContext)
	return state.users.map(user => {
		return <MyItem key={user.id} user={user} />
	})
}

export default List

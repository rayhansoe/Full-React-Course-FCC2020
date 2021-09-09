/* eslint-disable no-unused-vars */
import React, { useContext, lazy, Suspense } from "react"
import { StateContext } from "../UseReducerTopic"
const MyItem = lazy(() => import("./MyItem"))

const List = () => {
	const [state, dispatch] = useContext(StateContext)
	return state.users.map(user => <MyItem key={user.id} user={user} />)
}

export default List

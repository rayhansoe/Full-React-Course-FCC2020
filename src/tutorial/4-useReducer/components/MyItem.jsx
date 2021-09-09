/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { StateContext } from "../UseReducerTopic"

const MyItem = ({ user }) => {
	const { id, avatar_url, html_url, login } = user
	const [state, dispatch, handleClick] = useContext(StateContext)
	return (
		<li key={id} className='item'>
			<img src={avatar_url} alt={login} />
			<a href={html_url} target='_blank' rel='noreferrer'>
				{login}
			</a>
			<button onClick={() => handleClick(id)}>remove</button>
		</li>
	)
}

export default MyItem

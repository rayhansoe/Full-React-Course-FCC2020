const MyItem = ({ user, handleClick }) => {
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
			<button onClick={() => handleClick(id)}>remove</button>
		</li>
	)
}

export default MyItem

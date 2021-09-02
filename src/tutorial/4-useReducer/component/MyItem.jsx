const MyItem = ({ user }) => {
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
}

export default MyItem

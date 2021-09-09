const MyItem = ({ person }) => {
	const { id, firstname, email, age } = person
	return (
		<div className='item' key={id}>
			<h4>{firstname}</h4>
			<p>{age}</p>
			<p>{email}</p>
		</div>
	)
}

export default MyItem

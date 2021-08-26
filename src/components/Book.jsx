const Book = ({ img, title, author, children }) => {
	return (
		<article className='book'>
			<img src={img} alt='book' />
			<h1>{title}</h1>
			<h4>{author}</h4>
			{children}
		</article>
	)
}

export default Book

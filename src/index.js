import React from "react"
import ReactDOM from "react-dom"

import "./index.css"

const Title = ({ children }) => <h1>{children}</h1>

const Author = ({ children }) => <h4>{children}</h4>

const Image = ({ source }) => <img src={source ? source : "/logo512.png"} alt='book' />

const Book = () => {
	return (
		<article className='book'>
			<Image source='https://m.media-amazon.com/images/I/7153baqNkML._AC_UL320_.jpg' />
			<Title>Learn to Read : Bird In Space</Title>
			<Author>Kindle</Author>
		</article>
	)
}

const BookList = () => {
	return (
		<section className='booklist'>
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	)
}

ReactDOM.render(<BookList />, document.getElementById("root"))

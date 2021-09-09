/* eslint-disable no-unused-vars */
import React, { useState, lazy, Suspense } from "react"
import { Link } from "react-router-dom"

import { myBooks } from "../../myBooks"

const Book = lazy(() => import("./component/Book"))

const BookList = () => {
	const [books, setBooks] = useState(() => myBooks)

	const newBooks = books.map(book => (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Book key={book.id} {...book}>
				{book.id === 2 && (
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo dolores
						excepturi, fugiat molestiae voluptas voluptatem nihil temporibus voluptates qui.
					</p>
				)}
			</Book>
		</Suspense>
	))

	return (
		<section className='booklist'>
			<h2>BookList</h2>

			<Link to='/'>
				<p>{"< "}back</p>{" "}
			</Link>

			{newBooks}
		</section>
	)
}

export default BookList

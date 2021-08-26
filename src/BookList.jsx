/* eslint-disable no-unused-vars */
import React, { useState } from "react"

import { myBooks } from "./myBooks"

import Book from "./components/Book"

const BookList = () => {
	const [books, setBooks] = useState(() => myBooks)

	const newBooks = books.map(book => (
		<Book key={book.id} {...book}>
			{book.id === 2 && (
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo dolores excepturi,
					fugiat molestiae voluptas voluptatem nihil temporibus voluptates qui.
				</p>
			)}
		</Book>
	))

	return <section className='booklist'>{newBooks}</section>
}

export default BookList

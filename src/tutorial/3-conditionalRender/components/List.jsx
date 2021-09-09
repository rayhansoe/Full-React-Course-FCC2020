import React, { lazy, Suspense } from "react"

const MyItem = lazy(() => import("./MyItem"))

const List = ({ people }) => (
	<>
		{people.map(person => (
			<Suspense fallback={<h1>Loading...</h1>}>
				<MyItem key={person.id} person={person} />
			</Suspense>
		))}
	</>
)

export default List

import React, { useState } from "react"
import { data } from "../../../data"

export const UseStateBasics = () => {
	const state = useState(1)
	return (
		<>
			<h1>Basic UseState</h1>
			{console.log(state[0])}
			{console.log(state[1])}
			{console.log(state[1](1))}
		</>
	)
}

export const UseStateArray = () => {
	const [people, setPeople] = useState(() => data)

	const removeItems = () => setPeople(() => [])

	const resetItems = () => setPeople(() => data)

	const removeItem = id => {
		const newArray = people.filter(person => person.id !== id)

		setPeople(() => newArray)
	}

	const peopleList = people.map(person => {
		const { id, name } = person

		return (
			<div className='item' key={id}>
				<h2>{name}</h2>
				<button onClick={() => removeItem(id)}>remove</button>
			</div>
		)
	})

	return (
		<>
			{/* <h1>UseState Array Example</h1> */}
			{peopleList}
			{people.length ? (
				<button className='btn' onClick={removeItems}>
					Remove Items
				</button>
			) : (
				<button className='btn' onClick={resetItems}>
					Reset Items
				</button>
			)}
		</>
	)
}

export const BasicCounter = () => {
	const [count, setCount] = useState(() => 0)

	const increment = () => setCount(count => count + 1)

	const decrement = () => setCount(count => count - 1)

	const resetCount = () => setCount(count => count - count)

	return (
		<section style={{ margin: "4rem 0" }}>
			<h2>Regular Counter</h2>
			<h1>{count}</h1>
			<button className='btn' onClick={decrement}>
				Decrease
			</button>
			<button className='btn' onClick={resetCount}>
				Reset
			</button>
			<button className='btn' onClick={increment}>
				Increase
			</button>
		</section>
	)
}

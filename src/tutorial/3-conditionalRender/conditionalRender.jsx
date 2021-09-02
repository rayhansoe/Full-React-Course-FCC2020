import React, { useState } from "react"

import MyInput from "./component/MyInput"

import { v4 as uuidv4 } from "uuid"

export const Main = () => {
	const [person, setPerson] = useState(() => ({
		firstname: "",
		email: "",
		age: "",
	}))
	const [people, setPeople] = useState(() => [])
	const [isShowed, setIsShowed] = useState(false)

	const peopleList = people.map(person => {
		const { id, firstname, email, age } = person

		return (
			<div className='item' key={id}>
				<h4>{firstname}</h4>
				<p>{age}</p>
				<p>{email}</p>
			</div>
		)
	})

	const toggleShowButton = () => setIsShowed(prev => !prev)

	const handleSubmit = e => {
		e.preventDefault()
		if (person.firstname && person.email && person.age) {
			const id = uuidv4()
			const newPerson = { ...person, id }
			setPeople(prevPeople => [...prevPeople, newPerson])
			setPerson(prevPerson => {
				prevPerson.firstname = ""
				prevPerson.email = ""
				prevPerson.age = ""
				return prevPerson
			})
		}
	}

	const handleChange = e => {
		const name = e.target.name
		const value = e.target.value
		setPerson(prevPerson => ({ ...prevPerson, [name]: value }))
	}

	return (
		<section>
			<h2 style={{ marginBottom: "40px" }}>{"Forms & Condtional Render"}</h2>
			<form onSubmit={handleSubmit} className='form'>
				<MyInput
					nameForId='firstname'
					label='Name : '
					value={person.firstname}
					handleChange={handleChange}
					type='text'
				/>
				<MyInput
					nameForId='email'
					label='Email : '
					value={person.email}
					handleChange={handleChange}
					type='email'
				/>
				<MyInput
					nameForId='age'
					label='Age : '
					value={person.age}
					handleChange={handleChange}
					type='text'
				/>
				<button className='btn' type='submit' onClick={handleSubmit}>
					add person
				</button>
			</form>
			<button className='btn' onClick={toggleShowButton}>
				{isShowed ? "Hide" : "Show"}
			</button>
			{isShowed && peopleList}
		</section>
	)
}

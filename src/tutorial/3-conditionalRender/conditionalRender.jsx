import React, { useState, lazy, Suspense } from "react"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

const MyInput = lazy(() => import("./components/MyInput"))
const List = lazy(() => import("./components/List"))

const Main = () => {
	const [person, setPerson] = useState(() => ({
		firstname: "",
		email: "",
		age: "",
	}))
	const [people, setPeople] = useState(() => [])
	const [isShowed, setIsShowed] = useState(true)

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

			<Link to='/'>
				<p>{"< "}back</p>{" "}
			</Link>

			<form onSubmit={handleSubmit} className='form'>
				<Suspense fallback={<h1>Loading...</h1>}>
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
				</Suspense>
				<button className='btn' type='submit' onClick={handleSubmit}>
					add person
				</button>
			</form>
			<button className='btn' onClick={toggleShowButton}>
				{isShowed ? "Hide" : "Show"}
			</button>
			{isShowed && (
				<Suspense fallback={<h1>Loading...</h1>}>
					<List people={people} />
				</Suspense>
			)}
		</section>
	)
}

export default Main

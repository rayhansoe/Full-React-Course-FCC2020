import React from "react"
import ReactDOM from "react-dom"

const Title = ({ children }) => <h1>{children}</h1>

const Author = ({ children }) => <p>{children}</p>

const Greeting = () => {
	return (
		<>
			<section>
				<img src='/logo512.png' alt='logo' />
				<Title>Rich Dad Poor Dad.</Title>
				<Author>Rayhan Soe</Author>
			</section>
		</>
	)
}

ReactDOM.render(<Greeting />, document.getElementById("root"))

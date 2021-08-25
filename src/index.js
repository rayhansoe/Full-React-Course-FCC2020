import React from "react"
import ReactDOM from "react-dom"

const Title = () => <h1>Hello World</h1>

const Desc = () => <p>So What's up dude!?</p>

const Greeting = () => {
	return (
		<>
			<Title />
			<Desc />
		</>
	)
}

ReactDOM.render(<Greeting />, document.getElementById("root"))

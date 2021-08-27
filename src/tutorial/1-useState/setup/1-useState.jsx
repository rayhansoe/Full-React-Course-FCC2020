import React, { useState } from "react"

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

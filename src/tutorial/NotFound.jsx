import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
	return (
		<div>
			<h2>404 Page Not Found.</h2>
			<Link to='/'>
				<p>Go Back!!!</p>
			</Link>
		</div>
	)
}

export default NotFound

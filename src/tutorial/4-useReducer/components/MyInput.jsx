import React, { useContext } from "react"
import { StateContext } from "../UseReducerTopic"

const MyInput = ({ nameForId, type, value, handleChange, label, children, status }, ref) => {
	const [state] = useContext(StateContext)
	return (
		<div className='form-control'>
			<label htmlFor={nameForId}>{label || children}</label>
			<input
				type={type}
				id={nameForId}
				value={value}
				required='required'
				onChange={handleChange}
				name={nameForId}
				ref={ref}
				autoFocus
				disabled={state.url && true}
			/>
		</div>
	)
}

export default React.forwardRef(MyInput)

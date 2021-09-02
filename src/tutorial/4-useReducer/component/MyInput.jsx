import React from "react"

const MyInput = ({ nameForId, type, value, handleChange, label, children, status }, ref) => {
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
				disabled={status && true}
			/>
		</div>
	)
}

export default React.forwardRef(MyInput)

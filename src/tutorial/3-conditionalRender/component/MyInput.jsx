const MyInput = ({ nameForId, type, value, handleChange, label, children }) => {
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
			/>
		</div>
	)
}

export default MyInput

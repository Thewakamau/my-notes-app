import React from "react"

const Createnote = (props) => {
	return (
		<div className='note'>
			<textarea
				name='form'
				id='form'
				cols='10'
				rows='5'
				maxLength='100'
				onChange={props.text}
				value={props.input}
			></textarea>
			<button className='btn' onClick={props.click}>
				Save
			</button>
		</div>
	)
}

export default Createnote

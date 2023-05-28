import React from "react"
import { DeleteForeverOutlined } from "@mui/icons-material"

const Note = ({ id, text, deleteNote }) => {
	return (
		<div className='note'>
			<div className='note-area'>{text}</div>
			<div
				className='note__footer'
				style={{ justifyContent: "flex-end", margin: "20px" }}
			>
				<DeleteForeverOutlined
					className='note-delete'
					aria-hidden='true'
					onClick={() => deleteNote(id)}
					style={{ color: "red" }}
				></DeleteForeverOutlined>
			</div>
		</div>
	)
}

export default Note

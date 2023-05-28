import React from "react"
import Header from "./Components/Header"
import Note from "./Components/Note"
import Createnote from "./Components/Createnote"
import { useState, useEffect } from "react"
import { v4 as uuid } from "uuid"

const App = () => {
	const [note, setNote] = useState(
		() => JSON.parse(localStorage.getItem("note")) || []
	)
	//value from local store
	const [inputText, setinputText] = useState("")
	const [noteID, setcurrentnoteID] = useState(
		(note[0] && note[0].id) || ""
	) /*notes at index 0 exist before
	accessing that id
	*/
	//delete note function
	useEffect(() => {
		localStorage.setItem("note", JSON.stringify(note)) //save local storage
	}, [note])
	const deleteNote = (id) => {
		const filteredNotes = note.filter((note) => note.id !== id)
		setNote(filteredNotes)
	}
	//add new note to the state array
	function createnewNote() {
		const newnote = {
			id: uuid(), //This creates a new object with unique id.
			text: inputText,
		}
		/*or const newNote={
				id: nanoid()
				body: 'Type your text here'}
				setNote((prevNotes=>[newNote, ...prevNotes]))*/
		setNote((prevNote) => [newnote, ...prevNote])
		//copy all the previos notes

		setinputText("Type here") //clear the input text area
		setcurrentnoteID(newnote.id)
	}
	//get text and store in state
	function textHandler(e) {
		setinputText(e.target.value) //when anything changes on text area it is update in UI
	}

	return (
		<div className='main'>
			<Header />
			<div className='notes'>
				{note.map((note) => (
					<Note
						key={note.id}
						id={note.id}
						text={note.text}
						deleteNote={deleteNote}
					/>
				))}

				<Createnote
					click={createnewNote}
					text={textHandler}
					input={inputText}
				/>
			</div>
		</div>
	)
}

export default App

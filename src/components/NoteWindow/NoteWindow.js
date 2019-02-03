import React from 'react';
import './NoteWindow.scss';

const NoteWindow = (props) => {
	return (
		<div className="NoteWindow">
			<h1>{props.note}</h1>
		</div>
	);
};

export default NoteWindow;
import React, { useRef, useContext } from 'react'
import { GifContext } from '../context';

export default function SearchGif() {
	const InputRef = useRef();
	const contextData = useContext(GifContext);
	const { setSearchTerm } = contextData;

	/**
	 *  Handle user input.
	 *
	 * @return {Void}
	 */
	const handleChange = e => {
		if (!InputRef.current.value) {
			setSearchTerm("hello");
		}
		else {
			setSearchTerm(InputRef.current.value)
		}
	}
	return (
		<header className="search-gif">
			<div className="input-container">
				<input
					type="text"
					placeholder="Search gif..."
					ref={InputRef}
					onChange={handleChange}
				/>
			</div>
		</header>
	)
}

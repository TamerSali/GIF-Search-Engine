import React, { useRef, useContext } from 'react'
import { GifContext } from '../context';

export default function SearchGif() {
	const InputRef = useRef();
	const contextData = useContext(GifContext);
	const { setSearchTerm, setLimit } = contextData;
	const defaultLimit = 12;
	/**
	 *  Handle user input.
	 *
	 * @param  {Object} e
	 * @return {Void}
	 */
	const handleChange = e => {
		if (!InputRef.current.value) {
			setSearchTerm("hello");
		}
		else {
			setSearchTerm(InputRef.current.value)
			setLimit(defaultLimit)
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
				<button onClick={() => setLimit(limit => '')}>Show All Results</button>
			</div>
		</header>
	)
}

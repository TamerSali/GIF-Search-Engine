import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { GifContext } from '../context';

export default function SingleGif({ url, title }) {
	const [isImageReady, setIsImageReady] = useState(false);
	const contextData = useContext(GifContext)
	const { searchTerm } = contextData;

	return (
		<article className="single-gif">
			<img
				src={url}
				alt={title}
				onLoad={() => setIsImageReady(true)}
			/>
			<div style={{ position: "absolute", top: "45%" }} className={!isImageReady ? "loading" : ''}>
				{!isImageReady && <span>Loading</span>}
			</div>
			<p style={isImageReady ? { display: "block" } : { display: "none" }} > {title.replace("GIF", '') || searchTerm}</p>
		</article>
	)
}

SingleGif.propTypes = {
	/**
	 * URL of Gif.
	 *
	 * @var {String}
	 */
	url: PropTypes.string,

	/**
	 * Title of Gif.
	 *
	 * @var {String}
	 */
	title: PropTypes.string
}
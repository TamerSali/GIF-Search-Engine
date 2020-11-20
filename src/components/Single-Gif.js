import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { GifContext } from '../context';

export default function SingleGif({ url, title }) {
	const [isImageReady, setIsImageReady] = useState(false);
	const contextData = useContext(GifContext)
	const { searchTerm } = contextData;

	return (
		<article className="single-gif">
			<a href={url} target="_blank">
				<img
					src={url}
					alt={title}
					className={!isImageReady ? "ready-image" : ''}
					onLoad={() => setIsImageReady(true)}
				/>
			</a>
			<p style={isImageReady ? { display: "block" } : { display: "none" }} > { title || searchTerm}</p>
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
import React, { useContext } from 'react'
import SingleGif from './Single-Gif'
import SearchGif from './Search-Gif'
import { GifContext } from '../context';


export default function Gifs() {
	const { loading, gifCollection } = useContext(GifContext)

	return (
		<section className="gif-list">

			<SearchGif />

			{loading && (
				<div className="loading">
					<span>Loading</span>
				</div>
			)}
			{!loading && !gifCollection.length && (
				<h1 className="no-items">Nothing has been found...</h1>
			)
			}
			<div className="gif-collection">
				{gifCollection.map(gif => {
					const { url } = gif;
					return (
						<SingleGif key={url} {...gif} />
					)
				})}
			</div>
		</section>
	)
}

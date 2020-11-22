import React, { createContext, useState, useEffect, useCallback } from 'react'

const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=`;

export const GifContext = createContext();

export default function ContextApi({ children }) {
    const [loading, setLoading] = useState(false);
    const [gifCollection, setGifCollection] = useState([]);
    const [searchTerm, setSearchTerm] = useState('hello');
    const [limit, setLimit] = useState(12)

    /**
     * Fetch data from url with search,limit condition.
     *
     * @param   {Function}  async
     * @return  {Void}
     */
    const fetchGifs = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchTerm}&limit=${limit}`)
            const result = await response.json();
            const { data } = result;

            if (data) {
                const newData = data.map(gifItem => {
                    const { images: { fixed_width: { url } }, title } = gifItem;
                    return { title, url }
                })
                setGifCollection(newData)
            }
            else {
                setGifCollection([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [searchTerm, limit])

    /**
     * Update Gif Collection after input field change.
     *
     * @return  {Void}
     */
    useEffect(() => {
        fetchGifs();
    }, [searchTerm, fetchGifs])

    return (
        <GifContext.Provider value={{ loading, gifCollection, searchTerm, setSearchTerm, setLimit }}>
            {children}
        </GifContext.Provider>
    )
}
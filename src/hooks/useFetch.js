import { useState, useEffect } from 'react'

export default function useFetch(url){
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()

        fetch(url, { signal: abortController.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error("Connected to server but couldn't fetch data!")
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log(`Fetch to ${url} aborted!`)
                } else {
                    setError(err)
                    setIsPending(false)
                }
            })

        return () => {
            abortController.abort()
        }
    }, [url])

    return { data, isPending, error }
}
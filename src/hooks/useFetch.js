import { useState, useEffect } from 'react'

export default function useFetch(url){
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let aborted = false

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("server reached but couldn't fetch data")
                }
                return res.json()
            })
            .then(data => {
                if (!aborted) {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                }
            })
            .catch(error => {
                if (!aborted) {
                    setError(error)
                    setIsPending(false)
                }
            })

        return () => {
            aborted = true
        }
    }, [url])

    return { data, isPending, error }
}
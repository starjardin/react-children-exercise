import React, {useState, useEffect} from "react"
export default function DataFetcher ({ url, ...props }) {
  const [obj, setObj] = useState({
        loading: false,
        data: null
  })

  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setObj({ data, loading : false})
  }
    
  useEffect (() => {
    fetchData()
  }, [])

    return (
        <div>
          {props.children(obj, setObj)}
        </div>
    )
  }

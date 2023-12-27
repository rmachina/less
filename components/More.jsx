

'use client'

import { useState } from "react"


const More = ({ message }) => {

    const [more, setMore] = useState(false)

  return (
    <div>
        <p className={`${more === true ? 'line-clamp-0' : 'line-clamp-3'} text-sm font-medium`}>{message}</p>
        <button onClick={() => setMore(!more)} className="text-blue-500 text-sm font-medium">{more ? 'More Hidden' : 'More Show'}</button>
    </div>
  )
}

export default More
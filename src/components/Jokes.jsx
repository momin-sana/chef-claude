import React from 'react'

export default function Jokes(props) {
  return (
    <div className='joke'>
        {props.setup && <p className='setup'>{props.setup}</p>}
        <p className='punchline'>{props.punchline}</p>
    </div>
  )
}


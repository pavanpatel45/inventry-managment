import React from 'react'

export default function Button({btnTitle,onClick}) {
  return (
    <div className='py-1.5 px-10 rounded-md  text-white' style={{ backgroundColor: '#B3B3B3' }}>
       <button className='' type="submit" onClick={onClick}>{btnTitle}</button>
    </div>
  )
}

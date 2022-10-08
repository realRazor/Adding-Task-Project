import React from 'react'

export default function ToggleButton({toggleForm, showForm}) {
  return (
    <button className='openButton' onClick={toggleForm}>{showForm ? "Close" : "Add Task"} </button>
  )
}

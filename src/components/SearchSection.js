import React,{useState} from 'react'

function SearchSection(
    {
        setFrom,setTo,setselectedDate,setTime,handleSearch
    }
) {
  return (
   
    <div className="m-5 bg-light p-5">
    <div className="mb-3">
      <label className="form-label">From</label>
      <input
        type="text"
        placeholder="type where you want to travel from"
        onChange={(e) => setFrom(e.target.value)}
        className="form-control"
      />
    </div>
    <div className="mb-3">
      <label className="form-label">To</label>
      <input
        type="text"
        placeholder="type where you want to go to"
        onChange={(e) => setTo(e.target.value)}
        className="form-control"
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Date</label>
      <input
        type="date"
        onChange={(e) => setselectedDate(e.target.value)}
        className="form-control"
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Hours</label>
      <input
        type="time"
        onChange={(e) => setTime(e.target.value)}
        className="form-control"
      />
    </div>
    <button
      onClick={() => handleSearch()}
      className="btn btn-outline-info btn-lg"
    >
      Search 
    </button>
  </div>
  )
}

export default SearchSection
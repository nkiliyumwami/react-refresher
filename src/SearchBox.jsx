import React from 'react'

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className="pa2">
        <input 
            className='pa2 ba b--green bg-lightest-blue br-pill'
            type="search" 
            placeholder='search robots' 
            onChange={searchChange}
            value={searchfield}
        />
            
    </div>
    
  )
}

export default SearchBox
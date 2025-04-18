import React from 'react'
import "./Searchresults.css"

export const SearchResult = ({results}) => {
  return (
    <div className='search-result' onClick={(e) => alert(`You clicked on ${results.name}`)}>
      {results.name}
    </div>
  )
}

export default SearchResult
  
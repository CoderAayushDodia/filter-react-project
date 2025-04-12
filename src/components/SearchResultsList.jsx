import React from 'react'
import "./SearchResultsList.css"
import SearchResult from './SearchResult'


export const SearchResultsList = ({results}) => {
  return (
    <div className='result-list'>
      {
         results.map((results, id) => {
            return <SearchResult results={results} key={id}/>
         })
      }
    </div>
  )
}

export default SearchResultsList;

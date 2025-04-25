import React from 'react'
import "./Searchresults.css"
import axios from "axios";

export const SearchResult = ({results}) => {
  const handleClick = async () => { //chat gpt method
    alert(`You clicked on ${results.name}`);

    try {
     const response = await axios.post('https://reqres.in/api/users', {
      name: results.name
     });
     console.log("Post response: ",response.data)

    } catch(error){
       console.error("Post error: ", error)
    }
  };

  return (
    <div className='search-result' onClick={handleClick}>   {/*(e) => alert(`You clicked on ${results.name}`)*/}
      {results.name}
    </div>
  )
}

export default SearchResult
  

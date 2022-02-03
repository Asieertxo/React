export default function Search({searchTerm, setSearchTerm}){

  function handleChange(event){
    setSearchTerm(event.target.value);
  }

  return(
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} value={searchTerm}/>

      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </>
  )
}


import React, {useState, useEffect} from 'react'
import axios from 'axios'

//component
import MovieModal from './MovieModal'

//api
const api = 'https://www.omdbapi.com/?'
//api key
const apiKey = 'apikey=18eaeb4f'

const Main = () => {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [movieDetails, setMovieDetails] = useState()
  const [selID, setSelID] = useState('')

  const [show, setShow] = useState(false)

  //number of pages
  const [results, setResults] = useState() //totalResults
  const [pagesNum, setPagesNum] = useState() 
  const [pags, setPags] = useState() //paginas
  const [selPage, setSelPage] = useState('')
  const [actualPag, setActualPag] = useState()
  
  //pagination stuff

  const getPages = () => {
    if (results % 10 > 0 ) {
      const pages = parseInt((results / 10)+1)
      setPagesNum(pages)
      return
    }
      const pages = parseInt(results / 10)
      setPagesNum(pages)
  }

  //modal config

  const showModal = () => {
    setShow(true)
  }

  const hideModal = () => {
    
    setShow(false)
    setMovieDetails()
  }

  const handleClose = () => {
    hideModal()
  }

  //get response from API

  const getInfo = (page) => {
    if (page) {
      axios.get(api+apiKey+`&s=${name}`+"&type=movie"+`&page=${page}`)
    .then(res => {
      if (res) {
        setList(res.data.Search)
        setResults(res.data.totalResults)
      }
    })
    return
    }
    axios.get(api+apiKey+`&s=${name}`+"&type=movie"+"&page=1")
    .then(res => {
      if (res) {
        setList(res.data.Search)
        setResults(res.data.totalResults)
        setActualPag(1)
      }
    })
  }

  //submit the title entered
  
  const handleSubmit = (e) => {
    e.preventDefault()
    getInfo()
  }


  //get the details from movie

  const details = (e, id) => {
    e.preventDefault()
    setSelID(id)
    axios.get(api+apiKey+`&i=${id}`)
    .then(res => {
      if (res) {
        setMovieDetails(res.data)
      }
    })
    showModal()
  }


  //getpageseffect
  useEffect(() => {
    getPages()
  })

  const pages = [];
  

  for (let i = 1; i <= pagesNum; i++) {
    pages.push(<p key={i} onClick={e => goTo(i)}>{i}</p>)
  }

  const goTo = (page) => {
    setActualPag(page)
    getInfo(page)
    window.scrollTo(0, 0)
  }

    
  return (
    <div>
   
      <form>
        
        <div className="searchBar">
          <label htmlFor="name"></label>
          <input type="text" name="name" placeholder="movie name"  onChange={e => setName(e.target.value)}/>
          <button type="submit" onClick={e => handleSubmit(e)}>Search</button>
        </div>
        
      </form>

      {list ? 
      <div className="movies">
        {list.map(movie => (
          <div key={movie.imdbID} className="movie">
            <img src={movie.Poster} alt=""/>
            <div className="movie-title">
              <p>{movie.Title}</p>
            </div>
            <button className="movie-detailsBtn" onClick={e => details(e, movie.imdbID)}>Details</button>
            
            {/* modal */}
            {movieDetails && (selID===movie.imdbID) && show ? 
              <MovieModal movieInfo={movieDetails} handleClose={handleClose}/> : 
              <div className="modal display-none"></div>
            }

          </div>))}
      </div> 
      : null}

      {pagesNum ? 
        <div className="pages">
          {/* {pages} */} 
          {/* if prev page is 0 it wont show */}
          {actualPag-1===0 ? null : <b onClick={e => goTo(actualPag-1)}>{actualPag-1}</b>} 
          <b onClick={e => goTo(actualPag)} className="actualPage">{actualPag}</b>
          <b onClick={e => goTo(actualPag+1)}>{actualPag+1}</b>
        </div>
      : null}

      
    </div>
  )
}

export default Main

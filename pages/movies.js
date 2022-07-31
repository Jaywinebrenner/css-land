

import { useEffect, useState } from "react";
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Movies = () => {

  const [movieInput, setMovieInput] = useState();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState();
  const [warningOpen, setWarningOpen] = useState(false);

  const handleSubmit =  async (e) => {
    setLoading(true)
    console.log("MOVIE AFTER SUBMISSIOn", movie)
    e.preventDefault();
    try {
      const response = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=d54828b2`);
      const data = await response.json()
      if(data.Error) {
        setWarningOpen(true);
      }
      setMovie(data);
      setLoading(false)
    } catch (e) {
      console.log("IN CATCH BLOCK")
      setLoading(false)
      setWarningOpen(true)
      console.error(e.toString);
    } 
  }

  const handleInputChange = (event) => {
    setMovie(event.target.value);
  }

  const handleX = () => {
    setWarningOpen(false)
  }


  const renderErrorMessage = () => {
    return (
      <div className="warning">
        <h5>{movie.Error}</h5>
        <div onClick={()=> handleX()} className="x-wrapper">
          <h1>x</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="movies">
      <div className="movies__top">
          <Link href="/bored">
        <div className="arrow-wrapper">
              <FontAwesomeIcon className="draw-arrow" icon={faArrowLeft} />
        </div>
          </Link>
        <h1>BORED? SEARCH FOR A MOVIE!</h1>
      </div>
      <div className="movies__body">
        <form onSubmit={handleSubmit}>
          <input value={movieInput} onChange={(e) => handleInputChange(e)} className="enter" type="text" name="name" />
          <input className="submit-button" type="submit" value="SUBMIT" />
        </form>
      </div>
      <div className="movie-wrapper">
      { 
      movie && !loading &&
        <div className="movie">
          <div className="movie__left">
            <h3>{movie.Title && movie.Title}</h3>
            <h2>{movie.Runtime && movie.Runtime}</h2>
            <h2>{movie.Released && movie.Released}</h2>
            {movie.Director && <h2>Directed by: {movie.Director}</h2>}
            {movie.Plot && <h2>Plot: {movie.Plot}</h2>}
          </div>
          {<div className="movie__right">
            {movie.Poster !== "N/A" && <img src={movie.Poster}></img>}
          </div>}
        </div>
      }
      </div>
        <div className="loader">
          {loading && <img  src="loader.gif"/>}
        </div>

      {/* {movie && console.log("RES",movie.Response) } */}
      {movie && movie.Error && warningOpen && renderErrorMessage()}
    </div>
  );
};

export default Movies;



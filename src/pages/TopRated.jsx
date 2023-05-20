import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function TopRated() {
  const [topRatedMovies, setTopRatedMovies] = useState("")

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=6af31bc37cbb2436640ecaf1e1265fdc"
    )
      .then((res) => res.json())
      .then((data) => {
        setTopRatedMovies(data.results)
      })
  }, [])

  if (!topRatedMovies) {
    return (
      <>
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      </>
    )
  }
  return (
    <div className="top-rated">
      <h1 className="top-rated-movie-h1">Top Rated movies</h1>
      <div className="top-rated-movies-wrapper">
        {topRatedMovies.map((movie) => {
          return (
            <div className="top-rated-movie-card" key={movie.id}>
              <Link to={`${movie.id}`} state={movie}>
                {" "}
                <img
                  className="top-rated-img"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                ></img>
                <h3 className="top-rated-h3">{movie.title}</h3>
                <p className="top-rated-p">
                  ({movie.release_date.split("-")[0]})
                </p>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

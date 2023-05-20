import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState("")

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=6af31bc37cbb2436640ecaf1e1265fdc"
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularMovies(data.results)
      })
  }, [])

  if (!popularMovies) {
    return (
      <>
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      </>
    )
  }
  return (
    <div className="popular">
      <h1 className="popular-movie-h1">Popular movies</h1>
      <div className="popular-movies-wrapper">
        {popularMovies.map((movie) => {
          return (
            <div className="popular-movie-card" key={movie.id}>
              <Link to={`${movie.id}`} state={movie}>
                {" "}
                <img
                  className="popular-img"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                ></img>
                <h3 className="popular-h3">{movie.title}</h3>
                <p className="popular-p">
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

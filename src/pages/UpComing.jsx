import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function UpComing() {
  const [upComingMovies, setUpComingMovies] = useState("")

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=6af31bc37cbb2436640ecaf1e1265fdc"
    )
      .then((res) => res.json())
      .then((data) => {
        setUpComingMovies(data.results)
      })
  })

  if (!upComingMovies) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="upcoming">
      <h1 className="upcoming-movie-h1">upcoming movies</h1>
      <div className="upcoming-movies-wrapper">
        {upComingMovies.map((movie) => {
          return (
            <div className="upcoming-movie-card" key={movie.id}>
              <Link to={`${movie.id}`} state={movie}>
                <img
                  className="upcoming-img"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                ></img>
                <h3 className="upcoming-h3">{movie.title}</h3>
                <p className="upcoming-p">
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

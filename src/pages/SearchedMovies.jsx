import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function SearchedMovies() {
  const [searchedMovies, setSearchedMovies] = useState("")
  const param = useParams()
  //   console.log(param)

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=6af31bc37cbb2436640ecaf1e1265fdc&query=${param.query.replace(
        /-/g,
        " "
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchedMovies(data.results)
      })
  }, [param.query])

  if (!searchedMovies) {
    return (
      <>
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      </>
    )
  }
  return (
    <div className="searched-movies">
      <h1 className="searched-movie-h1">
        Search results for "{param.query.replace(/-/g, " ")}"
      </h1>
      <div className="searched-movies-wrapper">
        {searchedMovies
          .filter((movie) => movie.poster_path)
          .map((movie) => {
            return (
              <div className="searched-movie-card" key={movie.id}>
                <Link to={`${movie.id}`} state={movie}>
                  {" "}
                  <img
                    className="searched-img"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  ></img>
                  <h3 className="searched-h3">{movie.title}</h3>
                  <p className="searched-p">
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

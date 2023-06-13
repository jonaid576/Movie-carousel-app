import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Error from "../components/Error"
import LoadingSpin from "../components/LoadingSpin"
import { useGlobalContext } from "../context"
import useFetch from "../useFetch"
import SearchedMovies from "./SearchedMovies"

export default function PopularMovies() {
  const { query } = useGlobalContext()
  const [loading, error, data] = useFetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=6af31bc37cbb2436640ecaf1e1265fdc"
  )

  if (loading) {
    return <LoadingSpin />
  }

  if (error) {
    return <Error />
  }

  if (!query) {
    return (
      <div className="popular">
        <h1 className="popular-movie-h1">Popular movies</h1>
        <div className="popular-movies-wrapper">
          {data.results.map((movie) => {
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

  if (query) {
    return <SearchedMovies />
  }
}

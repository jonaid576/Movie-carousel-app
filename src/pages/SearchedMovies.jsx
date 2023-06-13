import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Error from "../components/Error"
import LoadingSpin from "../components/LoadingSpin"
import useFetch from "../useFetch"
import { useGlobalContext } from "../context"

export default function SearchedMovies() {
  const { query } = useGlobalContext()

  const [loading, error, data] = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=6af31bc37cbb2436640ecaf1e1265fdc&query=${query}`,
    query
  )

  if (loading) {
    return <LoadingSpin />
  }

  if (error) {
    return <Error />
  }

  if (data.results.length < 1) {
    return (
      <section className="searched-movies">
        <h1 className="searched-movie-h1">
          no results were found for "{query}"
        </h1>
      </section>
    )
  }

  return (
    <section className="searched-movies">
      <h1 className="searched-movie-h1">Search results for "{query}"</h1>
      <div className="searched-movies-wrapper">
        {data.results
          .filter((movie) => movie.poster_path)
          .map((movie) => {
            return (
              <div className="searched-movie-card" key={movie.id}>
                <Link
                  to={`/searched-movies/${query}/${movie.id}`}
                  state={movie}
                >
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
    </section>
  )
}

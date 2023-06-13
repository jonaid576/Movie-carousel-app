import React from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../context"

export function MovieCard({ movie }) {
  const { restorationRef, markerItem, setMarkerItem } = useGlobalContext()

  useEffect(() => {
    if (markerItem === movie.id) {
      restorationRef.current.scrollIntoView({
        behvaior: "auto",
        block: "center",
      })
    }
  })

  return (
    <article
      className="now-playing-movie-card"
      key={movie.id}
      ref={markerItem === movie.id ? restorationRef : null}
    >
      <Link
        to={`${movie.id}`}
        state={movie}
        onClick={() => setMarkerItem(movie.id)}
      >
        <img
          className="now-playing-img"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        ></img>
        <h3 className="now-playing-h3">{movie.title}</h3>
        <p className="now-playing-p">({movie.release_date.split("-")[0]})</p>
      </Link>
    </article>
  )
}

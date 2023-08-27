import React, { useLayoutEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const MovieDetails = () => {
  const location = useLocation()
  const selectedMovie = location.state

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    // console.log("movie detail card mount")
  })

  return (
    <section className="movie-details-card">
      <div className="movie-details-img-wrapper">
        <img
          className="movie-details-img"
          src={
            selectedMovie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`
              : `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`
          }
          alt={selectedMovie.title}
        />
      </div>
      <div className="movie-details-content">
        <h3 className="movie-details-header">{selectedMovie.title}</h3>
        <p className="rating-wrapper">
          <i className="fa-star">
            <FontAwesomeIcon icon={faStar} />
          </i>
          <span className="movie-details-rating">
            {selectedMovie.vote_average.toFixed(1)} (IMDb)
          </span>
        </p>
        <div>
          <h3 className="release-date-h3">Release date</h3>
          <span className="release-date-span">
            {selectedMovie.release_date}
          </span>
        </div>
        <div>
          <h3 className="synopsis">Synopsis</h3>
          <p className="synopsis-p">{selectedMovie.overview}</p>
        </div>
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="back-icon" /> Go
          Back
        </button>
      </div>
    </section>
  )
}

export default MovieDetails

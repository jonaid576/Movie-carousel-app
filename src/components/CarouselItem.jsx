import { Link } from "react-router-dom"
import { SlArrowLeft } from "react-icons/sl"
import { SlArrowRight } from "react-icons/sl"

export default function CarouselItem({
  movie,
  visibleMovie,
  upcomingMovies,
  increaseIndex,
  decreaseIndex,
}) {
  // console.log(movie);
  return (
    <article
      className={`carousel-item ${
        movie.id === visibleMovie.id ? "is-active" : null
      }`}
    >
      <div className="carousel-img-div">
        <Link
          to={`/${movie.id}`}
          className="carousel-link"
          state={upcomingMovies}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className={`carousel-img`}
          ></img>
        </Link>
        {/* ARROW BUTTONS FOR CHANGING CAROUSEL */}
        <div className="arrow-btn-wrapper">
          <button className="arrow-btn left-arrow-btn" onClick={decreaseIndex}>
            <SlArrowLeft className="left-arrow-icon" />
          </button>
          <button className="arrow-btn right-arrow-btn" onClick={increaseIndex}>
            <SlArrowRight className="right-arrow-icon" />
          </button>
        </div>
      </div>
      <div className="carousel-content">
        {" "}
        <h1 className="carousel-item-h1">{movie.title}</h1>
        <p className="carousel-item-p">{movie.overview}</p>
      </div>
    </article>
  )
}

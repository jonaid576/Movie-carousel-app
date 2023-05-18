import { Link } from "react-router-dom"

export default function CarouselItem({ movie, visibleMovie }) {
  // console.log(movie);
  return (
    <div
      className={`carousel-item ${
        movie.id === visibleMovie.id ? "is-active" : null
      }`}
    >
      <Link to={`/${movie.id}`} className="carousel-link">
        <div className="carousel-img-div">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className={`carousel-img`}
          ></img>
        </div>
      </Link>
      <div className="carousel-content">
        {" "}
        <h1 className="carousel-item-h1">{movie.title}</h1>
        <p className="carousel-item-p">{movie.overview}</p>
      </div>
    </div>
  )
}

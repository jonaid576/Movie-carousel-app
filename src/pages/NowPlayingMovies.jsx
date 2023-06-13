import { Link } from "react-router-dom"
import useFetch from "../useFetch"
import LoadingSpin from "../components/LoadingSpin"
import Error from "../components/Error"

export default function NowPlayingMovies() {
  const [loading, error, data] = useFetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=6af31bc37cbb2436640ecaf1e1265fdc"
  )

  if (loading) {
    return <LoadingSpin />
  }

  if (error) {
    return <Error />
  }

  return (
    <section className="now-playing">
      <h1 className="now-playing-h1">Trending Movies</h1>
      <div className="now-playing-movies-wrapper">
        {data.results.map((movie) => {
          return (
            <div className="now-playing-movie-card" key={movie.id}>
              <Link to={`${movie.id}`} state={movie}>
                <img
                  className="now-playing-img"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                ></img>
                <h3 className="now-playing-h3">{movie.title}</h3>
                <p className="now-playing-p">
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

import Error from "../components/Error"
import LoadingSpin from "../components/LoadingSpin"
import { useGlobalContext } from "../context"
import useFetch from "../useFetch"
import SearchedMovies from "./SearchedMovies"
import { MovieCard } from "../components/MovieCard"

export default function UpComing() {
  const { query } = useGlobalContext()
  const [loading, error, data] = useFetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=6af31bc37cbb2436640ecaf1e1265fdc"
  )

  if (loading) {
    return <LoadingSpin />
  }

  if (error) {
    return <Error />
  }

  if (!query) {
    return (
      <div className="upcoming">
        <h1 className="upcoming-movie-h1">upcoming movies</h1>
        <div className="upcoming-movies-wrapper">
          {data.results.map((movie) => {
            const { id } = movie
            return <MovieCard key={id} movie={movie} />
          })}
        </div>
      </div>
    )
  }

  if (query) {
    return <SearchedMovies />
  }
}

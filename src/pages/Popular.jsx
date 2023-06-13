import Error from "../components/Error"
import LoadingSpin from "../components/LoadingSpin"
import { useGlobalContext } from "../context"
import useFetch from "../useFetch"
import SearchedMovies from "./SearchedMovies"
import { MovieCard } from "../components/MovieCard"

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

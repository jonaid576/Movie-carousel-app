import Error from "../components/Error"
import LoadingSpin from "../components/LoadingSpin"
import { useGlobalContext } from "../context"
import useFetch from "../useFetch"
import SearchedMovies from "./SearchedMovies"
import { MovieCard } from "../components/MovieCard"

export default function TopRated() {
  const { query } = useGlobalContext()

  const [loading, error, data] = useFetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${
      import.meta.env.VITE_MOVIE_API_KEY
    }`
  )

  if (loading) {
    return <LoadingSpin />
  }

  if (error) {
    return <Error />
  }

  if (!query) {
    return (
      <div className="top-rated">
        <h1 className="top-rated-movie-h1">Top Rated movies</h1>
        <div className="top-rated-movies-wrapper">
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

import Error from "../components/Error"
import LoadingSpin from "../components/LoadingSpin"
import useFetch from "../useFetch"
import { useGlobalContext } from "../context"
import { MovieCard } from "../components/MovieCard"

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
            const { id } = movie
            return <MovieCard key={id} movie={movie} />
          })}
      </div>
    </section>
  )
}

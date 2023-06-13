import useFetch from "../useFetch"
import LoadingSpin from "../components/LoadingSpin"
import Error from "../components/Error"
import { MovieCard } from "../components/MovieCard"

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
          const { id } = movie
          return <MovieCard key={id} movie={movie} />
        })}
      </div>
    </section>
  )
}

import React, { useEffect, useState } from "react"

export default function NowPlayingMovies() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState("")

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=6af31bc37cbb2436640ecaf1e1265fdc"
    )
      .then((res) => res.json())
      .then((data) => {
        setNowPlayingMovies(data.results)
      })
  }, [])

  if (!nowPlayingMovies) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <div className="now-playing-movies-wrapper">
        <h1 className="now-playing-h1">Trending Movies</h1>
        {nowPlayingMovies.map((movie) => {
          return (
            <div className="now-playing-movie-card" key={movie.id}>
              <img
                className="now-playing-img"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              ></img>
              <h3 className="now-playing-h3">{movie.title}</h3>
              <p className="now-playing-p">
                ({movie.release_date.split("-")[0]})
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}

import { useEffect, useState } from "react"
import { useGlobalContext } from "../context.jsx"
import useFetch from "../useFetch.jsx"

import CarouselItem from "./CarouselItem.jsx"
import LoadingSpin from "./LoadingSpin.jsx"

export default function Carousel() {
  const { index, setIndex } = useGlobalContext()
  const [loading, error, data] = useFetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=6af31bc37cbb2436640ecaf1e1265fdc"
  )

  const increaseIndex = () => {
    setIndex((prevIndex) =>
      prevIndex == data.results.length - 1 ? 0 : prevIndex + 1
    )
    console.log("index increase")
  }

  const decreaseIndex = () => {
    setIndex((prevIndex) =>
      prevIndex == 0 ? data.results.length - 1 : prevIndex - 1
    )
    console.log("index decreased")
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      increaseIndex()
    }, 5000)
    return () => clearInterval(intervalId)
  }, [data])

  if (loading) {
    return <LoadingSpin />
  }
  const visibleMovie = data.results[index]
  return (
    <div className="carousel">
      <div>
        {data.results.map((movie) => {
          return (
            <div className="carousel-container" key={movie.id}>
              <CarouselItem
                key={movie.id}
                movie={movie}
                visibleMovie={visibleMovie}
                upcomingMovies={movie}
                increaseIndex={increaseIndex}
                decreaseIndex={decreaseIndex}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

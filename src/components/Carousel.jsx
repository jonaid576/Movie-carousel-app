import { useEffect, useState } from "react"

import CarouselItem from "./CarouselItem.jsx"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons"

export default function Carousel() {
  const [upcomingMovies, setUpcomingMovies] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=6af31bc37cbb2436640ecaf1e1265fdc"
    )
      .then((res) => res.json())
      .then((data) => {
        setUpcomingMovies(data.results)
      })
  }, [])

  const visbleMovie = upcomingMovies[index]
  //   console.log(visbleMovie);

  const increaseIndex = () => {
    setIndex((prevIndex) =>
      prevIndex == upcomingMovies.length - 1 ? 0 : prevIndex + 1
    )
    console.log("index increase")
  }

  const decreaseIndex = () => {
    setIndex((prevIndex) =>
      prevIndex == 0 ? upcomingMovies.length - 1 : prevIndex - 1
    )
    console.log("index decreased")
  }

  if (!upcomingMovies) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="carousel">
      <div>
        {upcomingMovies.map((movie) => {
          return (
            <div className="carousel-container">
              <CarouselItem
                key={movie.id}
                movie={movie}
                visibleMovie={visbleMovie}
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
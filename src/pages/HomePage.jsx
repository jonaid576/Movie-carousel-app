import React from "react"

import Carousel from "../components/Carousel"
import NowPlayingMovies from "./NowPlayingMovies"

export default function HomePage() {
  return (
    <>
      <Carousel />
      <NowPlayingMovies />
    </>
  )
}

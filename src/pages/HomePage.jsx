import React from "react"

import Carousel from "../components/Carousel"
import { useGlobalContext } from "../context"
import NowPlayingMovies from "./NowPlayingMovies"
import SearchedMovies from "./SearchedMovies"

export default function HomePage() {
  const { query } = useGlobalContext()

  if (!query) {
    return (
      <>
        <Carousel />
        <NowPlayingMovies />
      </>
    )
  }

  if (query) {
    return <SearchedMovies />
  }
}

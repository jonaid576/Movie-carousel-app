import "./styles.css"
import AppLayout from "./pages/AppLayout.jsx"
import HomePage from "./pages/HomePage"
import UpComing from "./pages/UpComing"
import TopRated from "./pages/TopRated"
import PopularMovies from "./pages/Popular"
import MovieDetailCard from "./pages/MovieDetailCard"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<MovieDetailCard />} />
          <Route path="/popular" element={<PopularMovies />} />
          <Route path="/popular/:id" element={<MovieDetailCard />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="/upcoming/:id" element={<MovieDetailCard />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/toprated/:id" element={<MovieDetailCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import "./styles.css"
import AppLayout from "./pages/AppLayout.jsx"
import HomePage from "./pages/HomePage"
import UpComing from "./pages/UpComing"
import TopRated from "./pages/TopRated"
import PopularMovies from "./pages/Popular"
import MovieDetailCard from "./pages/MovieDetailCard"
import SearchedMovies from "./pages/SearchedMovies"
import PageNotFound from "./components/PageNotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import TopScrollBtn from "./components/TopScrollBtn"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="popular" element={<PopularMovies />} />
            <Route path="upcoming" element={<UpComing />} />
            <Route path="toprated" element={<TopRated />} />
            <Route path="searched-movies/:query" element={<SearchedMovies />} />
          </Route>
          <Route
            path="/searched-movies/:query/:id"
            element={<MovieDetailCard />}
          />
          <Route path="/:id" element={<MovieDetailCard />} />
          <Route path="popular/:id" element={<MovieDetailCard />} />
          <Route path="upcoming/:id" element={<MovieDetailCard />} />
          <Route path="toprated/:id" element={<MovieDetailCard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <TopScrollBtn />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

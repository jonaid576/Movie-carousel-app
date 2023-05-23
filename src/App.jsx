import "./styles.css"
import AppLayout from "./pages/AppLayout.jsx"
import HomePage from "./pages/HomePage"
import UpComing from "./pages/UpComing"
import TopRated from "./pages/TopRated"
import PopularMovies from "./pages/Popular"
import MovieDetailCard from "./pages/MovieDetailCard"
import SearchedMovies from "./pages/SearchedMovies"
import PageNotFound from "./components/PageNotFound"

import Error from "./components/Error"

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />} errorElement={<Error />}>
        <Route index element={<HomePage />} />
        <Route path="/searched-movies/:query" element={<SearchedMovies />} />
        <Route
          path="searched-movies/:query/:id"
          element={<MovieDetailCard />}
        />
        <Route path="/:id" element={<MovieDetailCard />} />
        <Route path="/popular" element={<PopularMovies />} />
        <Route path="/popular/:id" element={<MovieDetailCard />} />
        <Route path="/upcoming" element={<UpComing />} />
        <Route path="/upcoming/:id" element={<MovieDetailCard />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/toprated/:id" element={<MovieDetailCard />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  )

  return (
    <>
      {" "}
      <RouterProvider router={router} />
    </>
  )
}

export default App

// <BrowserRouter>
//   <Routes>
// <Route path="/" element={<AppLayout />}>
//   <Route index element={<HomePage />} />
//   <Route path="/searched-movies/:query" element={<SearchedMovies />} />
//   <Route
//     path="searched-movies/:query/:id"
//     element={<MovieDetailCard />}
//   />
//   <Route path="/:id" element={<MovieDetailCard />} />
//   <Route path="/popular" element={<PopularMovies />} />
//   <Route path="/popular/:id" element={<MovieDetailCard />} />
//   <Route path="/upcoming" element={<UpComing />} />
//   <Route path="/upcoming/:id" element={<MovieDetailCard />} />
//   <Route path="/toprated" element={<TopRated />} />
//   <Route path="/toprated/:id" element={<MovieDetailCard />} />

//   <Route path="*" element={<PageNotFound />} />
// </Route>
//   </Routes>
// </BrowserRouter>

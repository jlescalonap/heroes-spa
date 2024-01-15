import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, Hero, MarvelPage, SearchPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={ <Navigate to="/marvel" />} />
        <Route path="dc" element={<DcPage />} />

        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:id" element={<Hero />} />

        <Route path="marvel" element={<MarvelPage />} />
      </Routes>
      </div>
    </>
  )
}
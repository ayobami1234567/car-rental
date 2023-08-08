import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import CarListing from "../pages/CarListing"
import CarDetails from "../pages/CarDetails"
import Blog from "../pages/Blog"
import BlogDetails from "../pages/BlogDetails"
import NotFound from "../pages/Notfound"
import Contact from "../pages/Contact"
import Landing from "../pages/landing"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />}></Route>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router

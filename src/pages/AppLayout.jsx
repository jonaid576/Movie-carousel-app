import React from "react"
import { Outlet } from "react-router-dom"
import Form from "../components/Form"

export default function AppLayout() {
  return (
    <>
      <Form />
      {<Outlet />}
    </>
  )
}

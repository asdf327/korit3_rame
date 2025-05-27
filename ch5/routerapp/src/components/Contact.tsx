import { Route, Routes } from "react-router-dom"
import ContactBusan from "./ContactBusan"

export default function Contact(){
  return(
    <>
      <h3>Contact component</h3>
      <Routes>
        <Route path="busan" element={<ContactBusan />} />
      </Routes>
    </>
  )
}
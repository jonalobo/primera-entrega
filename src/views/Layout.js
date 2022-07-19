import { Outlet } from 'react-router-dom'

import NavBar from "../components/NavBar"
import Footer from '../container/Footer'

const Layout = () => {
  return (
    <>
        <NavBar />
        <main><Outlet/></main>
        <Footer />
    </>
  )
}
export default Layout
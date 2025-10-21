import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Rootlayout
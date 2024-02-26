import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './css/app.css'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'
import { useState } from 'react'

type Props = {}

export default function Start({}: Props) {
  const [sidebar, setSidebar] = useState<boolean>(true)

  return (
    <div>
       <Navbar setSidebar={setSidebar}  />
       <Routes>
          <Route path='/' element={<Home sidebar={sidebar}  />} />
          <Route path='/video/:categoryId/:videoId' element={<Video />} />
       </Routes>
    </div>
  )
}

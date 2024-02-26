import { Dispatch, SetStateAction, useState } from 'react'
import { logo, menu_icon, more, notification_icon, profile, search, upload } from '../../assets/images'
import './Navbar.css'
import { Link } from 'react-router-dom'
// import { API_KEY } from '../../data/data'
type Props = {
  setSidebar: Dispatch<SetStateAction<boolean>>
}

export default function Navbar({setSidebar}: Props) {
  
  const [_searchVideo, _setSearchVideo] = useState([])

  // const _searchData_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${API_KEY}`

  const setStates = (): void => {
     setSidebar(prev => prev === false ? true : false)
  }

  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
          <img className='menu-icon' src={menu_icon} onClick={setStates} alt="menu icon" />
          <Link to={'/'}> <img className='logo' src={logo} alt="logo icon" /></Link>
        </div>
        <div className="nav-middle flex-div">
            <div className="search-box">
                <input type="text" placeholder='Search' />
                <img src={search} alt="search-icon" />
            </div>
        </div>
        <div className="nav-right flex-div">
            <img src={upload} alt="upload icon" />
            <img src={more} alt="more icon" />
            <img src={notification_icon} alt="notify icon" />
            <img className='user-icon' src={profile} alt="profile icon" />
        </div>
    </nav>
  )
}
import { Dispatch, SetStateAction } from 'react'
import { automobile, blogs, cameron, entertainment, game_icon, home, jack, megan, music, news, simon, sports, tech, tom } from '../../assets/images'
import './Sidebar.css'

type Props = {
   sidebar: boolean,
   category: number,
   setCategory: Dispatch<SetStateAction<number>>
}

export default function Sidebar({sidebar,category,setCategory}: Props) {
  return (
    <aside className={`sidebar ${sidebar ? "":"small-sidebar"}`}>
        <div className="shortcut-links">
           <div className={`side-link ${category=== 0 && "active" }`} onClick={()=> setCategory(0)}>
             <img src={home} alt="home icon" />
             <p>Home</p>
           </div>
           <div className={`side-link ${category===20 && "active" }`} onClick={()=> setCategory(20)}>
             <img src={game_icon} alt="game icon" />
             <p>Gaming</p>
           </div>
           <div className={`side-link ${category===2 && "active" }`} onClick={()=> setCategory(2)}>
             <img src={automobile} alt="auto icon" />
             <p>Automobiles</p>
           </div>
           <div className={`side-link ${category===17 && "active" }`} onClick={()=> setCategory(17)}>
             <img src={sports} alt="sports icon" />
             <p>Sports</p>
           </div>
           <div className={`side-link ${category===24 && "active" }`} onClick={()=> setCategory(24)}>
             <img src={entertainment} alt="entertainment icon" />
             <p>Entertainment</p>
           </div>
           <div className={`side-link ${category===28 && "active" }`} onClick={()=> setCategory(28)}>
             <img src={tech} alt="tech icon" />
             <p>Technology</p>
           </div>
           <div className={`side-link ${category===10 && "active" }`} onClick={()=> setCategory(10)}>
             <img src={music} alt="music icon" />
             <p>Music</p>
           </div>
           <div className={`side-link ${category===22 && "active" }`} onClick={()=> setCategory(22)}>
             <img src={blogs} alt="blogs icon" />
             <p>Blogs</p>
           </div>
           <div className={`side-link ${category===25 && "active" }`} onClick={()=> setCategory(25)}>
             <img src={news} alt="news icon" />
             <p>News</p>
           </div>
           <hr />
        </div>
        <div className="subscribe-list">
           <h2>Subscribed</h2>
           <div className={`side-link`}>
              <img src={jack} alt="jack image" />
              <p>PewDiePie</p>
           </div>
           <div className={`side-link `}>
              <img src={simon} alt="simon image" />
              <p>Mrbeast</p>
           </div>
           <div className={`side-link `}>
              <img src={tom} alt="tom image" />
              <p>Justin Bieber</p>
           </div>
           <div className={`side-link `}>
              <img src={megan} alt="megan image" />
              <p>5-minute Craft</p>
           </div>
           <div className={`side-link `}>
              <img src={cameron} alt="cameron image" />
              <p>Nas Deli</p>
           </div>
        </div>
    </aside>
  )
}
import { useState } from 'react'
import Feed from '../../components/Feed/Feed'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Home.css'
type Props = {
    sidebar: boolean
}

export default function Home({sidebar}: Props) {

  const [category,setCategory] = useState(0)

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <main className={`container ${sidebar ? "":"large-container"}`}>
        <Feed category={category}/>
      </main>
    </>
  )
}
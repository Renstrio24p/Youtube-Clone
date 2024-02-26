import { useParams } from 'react-router-dom'
import PlayVideo from '../../components/PlayVideo/PlayVideo'
import Recommended from '../../components/Recommended/Recommended'
import './Video.css'
type Props = {}

export default function Video({}: Props) {

  const { categoryId } = useParams() 

  return (
    <div className='play-container'>
       <PlayVideo />
       <Recommended categoryId={categoryId}/>
    </div>
  )
}
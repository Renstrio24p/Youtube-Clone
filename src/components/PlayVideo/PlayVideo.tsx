import { useEffect, useState } from "react";
import { dislike, like, save, share } from "../../assets/images";
import "./PlayVideo.css";
import { API_KEY, value_converter, videos } from "../../data/data";
import { YoutubeItem } from "../Feed/types/Feed";
import moment from "moment";
import { CommentItems } from "./types/PlayVideo";
import { useParams } from "react-router-dom";


type Props = {}

export default function PlayVideo({}: Props) {
 
  const [apiData,setApiData] = useState<YoutubeItem | null>(null)
  const [channelData,setChannelData] = useState<YoutubeItem | null>(null) 
  const [commentData,setCommentData] = useState<CommentItems>([])
 
  const {videoId} = useParams()

  const fetchVideoData = async () => {
    // Fetching videos data
  
    await fetch(videos(videoId!))
          .then((res: Response) => res.json())
          .then((data:{ items: YoutubeItem[] }) => setApiData(data.items[0]))
    }

  const fetchOtherData = async () => {
    // fetching Channel Data

    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet.channelId}&key=${API_KEY}`
    const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`

     await fetch(channelData_url)
            .then((res: Response) => res.json())
            .then((data: { items : YoutubeItem[]}) => setChannelData(data.items[0]))
    
     await fetch(commentData_url)
            .then((res: Response) => res.json())
            .then((data: {items : CommentItems}) => setCommentData(data.items))

  }


    useEffect(()=>{
      fetchVideoData()
    },[videoId])
    
    useEffect(()=> {
      fetchOtherData()
    },[apiData])

  return (
    <div className="play-video">
      <iframe 
         src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>{apiData ? value_converter(apiData.statistics.viewCount) : 0} Views &bull; {moment(apiData?.snippet.publishedAt).fromNow()}</p>
        <div>
          <span>
            <img src={like} alt="like icon" /> {value_converter(Number(apiData?.statistics.likeCount))}
          </span>
          <span>
            <img src={dislike} alt="dislike icon" /> 0
          </span>
          <span>
            <img src={share} alt="share icon" />
            Share
          </span>
          <span>
            <img src={save} alt="save icon" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?.snippet.thumbnails.default.url} alt="jack image" />
        <div>
          <p>{apiData?.snippet.channelTitle}</p>
          <span>{value_converter(Number(channelData?.statistics.subscriberCount))} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
           {apiData?.snippet.description.slice(0,250)}
        </p>
        <hr />
        <h4>{value_converter(Number(apiData?.statistics.commentCount))} comments</h4>
        {
          commentData.map((item,id) => {
            return (
              <div key={id} className="comment">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user image" />
              <div>
                  <h5>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h5>
                  <p>
                      {item.snippet.topLevelComment.snippet.textDisplay}
                  </p>
                  <div className="comment-action">
                      <img src={like} alt="like icon" />
                      <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                      <img src={dislike} alt="like icon" />
                      <span>2</span>
                  </div>
              </div>
          </div>
            )
          })
        }
      </div>
    </div>
  );
}

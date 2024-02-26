import { useEffect, useState } from "react";
import "./Recommended.css";
import { YoutubeItem } from "./types/Recommended";
import { API_KEY, value_converter } from "../../data/data";
import moment from "moment";
import { Link } from "react-router-dom";
type Props = {
  categoryId?: string;
};

export default function Recommended({ categoryId }: Props) {
  const [apiData, setApiData] = useState<YoutubeItem[]>([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

    await fetch(relatedVideo_url)
      .then((res: Response) => res.json())
      .then((data: { items: YoutubeItem[] }) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData.map((item, id) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={id} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="thumbnail1" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>
                {value_converter(item.statistics.viewCount)} views &bull; <span>{moment(item.snippet.publishedAt).fromNow()}</span>
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

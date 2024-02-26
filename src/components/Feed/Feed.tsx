import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data/data";
import "./Feed.css";
import { YoutubeItem } from "./types/Feed";
import moment from "moment";

type Props = {
  category: number;
}

export default function Feed({ category }: Props) {
  const [data, setData] = useState<YoutubeItem[]>([]);

  const result = 50
  const countryCode = 'PH'

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${result}&regionCode=${countryCode}&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((res: Response) => res.json())
      .then((data: { items: YoutubeItem[] }) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item,id) => {
        return (
          <Link key={id} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
          <img src={item.snippet.thumbnails.medium.url} alt="thumb1" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
        )
      })}
    </div>
  );
}

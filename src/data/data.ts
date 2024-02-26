import { YoutubeItem } from "../components/Feed/types/Feed"

export const API_KEY = 'AIzaSyAeI3JD7v1Cg9r9h9pc9SU7_CSA-s79Ogw',
    Youtube_Link = 'GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key=[YOUR_API_KEY] HTTP/1.1'

export const value_converter = (value: number) => {
    if(value >= 1000000){
        return Math.floor(value/1000000) + "M"
    } else if (value >= 1000) {
        return Math.floor(value/1000) + "K"
    } else {
        return value
    }
}

// Urls


export const channels = (apiData: YoutubeItem) => {
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet.channelId}&key=${API_KEY}`
}

export const comments = (videoId: string) => {
    return `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
}

export const videos = (videoId: string) => {
    return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
}
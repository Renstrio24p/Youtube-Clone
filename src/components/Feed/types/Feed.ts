export type Youtubedata = {
    items: YoutubeItem
}

type ResolutionOptions = {
    url: string,
    width: number,
    height: number
}

type ContentDetails = {
    duration: string,
    dimension: string,
    definition: string,
    caption: boolean,
    licensedContent: boolean,
    contentRating: {},
    projection: string
}

type Statistics = {
    viewCount: number,
    likeCount: number,
    favoriteCount: number,
    commentCount: number,
    subscriberCount: number,
    hiddenSubscriberCount: boolean,
    videoCount: number
}

export type YoutubeItem = {
        kind: string,
        etag: string,
        id: string,
        snippet: {
          publishedAt: string,
          channelId: string,
          title: string,
          description: string,
          thumbnails: {
            default: ResolutionOptions,
            medium: ResolutionOptions,
            high: ResolutionOptions,
            standard: ResolutionOptions,
            maxres: ResolutionOptions
          },
          channelTitle: string,
          tags: string[],
          categoryId: string | number,
          liveBroadcastContent: string,
          localized: {
            title: string,
            description: string,
          },
          defaultAudioLanguage: string
        },
        contentDetails: ContentDetails,
        statistics: Statistics
      }
[]



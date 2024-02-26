
type Related = {
    likes: number | string,
    uploads: string
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
    subscriberCount: number,
    hiddenSubscriberCount: boolean,
    videoCount: number
}

export type ChannelItems = {
    kind: string,
    etag: string,
    id: string,
    snippet: {
      title: string,
      description: string,
      customUrl: string,
      publishedAt: string,
      localized: {
        title: string,
        description: string,
      },
      country: string,
    },
    contentDetails: ContentDetails,
    relatedPlaylists: Related
    statistics: Statistics
}[]

type topLComment = {
    kind: string,
    etag: string,
    id: string,
    snippet: {
        channelId: string,
        videoId: string,
        textDisplay: string,
        textOriginal: string,
        authorDisplayName: string,
        authorProfileImageUrl: string,
        authorChannelUrl: string,
        authorChannelId: {
            value: string,
        },
        canRate: boolean,
        viewerRating: boolean,
        likeCount: number,
        publishedAt: string,
        updatedAt: string
    },
}

export type CommentItems = {
    kind: string,
    etag: string,
    id: string,
    snippet: {
      channelId: string,
      videoId: string,
      topLevelComment: topLComment
    },
    canReply: boolean,
    totalReplyCount: number,
    isPublic: boolean
}[]

import fetch from 'isomorphic-unfetch';

const API_KEY = "YOUR_GOOGLE_API_KEY";

export const getChannelVideos = async (channelId: string) => {
    return await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`)
        .then(async response => {
            const json = await response.json();
            return json;
        })
}
import axios from 'axios';
const KEY = 'AIzaSyAyCPoFhBzFMXzT50FZLERgW2ztIrCyXaI';

export default axios.create({

  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params:{
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})

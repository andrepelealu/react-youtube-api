import React,{Component} from 'react';
import Searchbar from './Component/Searchbar';
import youtube from './api/youtube';
import VideoList from './Component/VideoList';
import VideoDetail from './Component/VideoDetail';
import axios from 'axios';
const KEY = 'AIzaSyAyCPoFhBzFMXzT50FZLERgW2ztIrCyXaI';

// import VideoItem from './Component/VideoItem';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  handleSubmit= async (termFromSearchBar)=> {
    const response = await youtube.get('/search',{
      params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        q: termFromSearchBar
      }
    })
    this.setState({
      videos: response.data.items
    })
  };
    handleVideoSelect = video =>{
      this.setState({selectedVideo:video})
    }

  render(){
    return (

        <div className='ui container' style={{marginTop: '1em'}}>
          <Searchbar handleFormSubmit={this.handleSubmit}/>
          <div className='ui grid'>
            <div className='ui row'>
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo}/>
              </div>
              <div className="five wide column">
                <VideoList handleVideoSelect = {this.handleVideoSelect} videos={this.state.videos}/>
              </div>
            </div>
          </div>
        </div>

    )
  }

}

export default App;

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

//import VideoListItem from '.components/video_list_item';
import VideoDetail from './components/video_detail';

// cerate a new coponent. this componenet will produce some HTML

const API_KEY = 'AIzaSyAX4iDX0i3CnRO0Hc6Rd9jmtFwiQd3xQgw';


/*
class App extends Component{
  constructor(props){
    super(props);

    this.state = {videos:[]};

    YTSearch({key:API_KEY, term:'Ateeb'}, (videos)=> {
      this.setState({videos});
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos = {this.state.videos} />
      </div>
    );
  }
}
*/
class App extends Component {
  constructor(props) {

      super(props);

      this.state = {
        videos: [],
        selectedVideo : null
      };


      this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({ key: API_KEY, term:term}, (videos)=>{
        this.setState({
          videos:videos,
          selectedVideo : videos[0]
        });
        //console.log(videos)
    });

  }
  render(){
    return (
        <div>
          <SearchBar onSearchTermChange={term => this.videoSearch({term})} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect = { selectedVideo=> this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
    );
  }
}


// Take this componenet's generated HTML and put it on the page(in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

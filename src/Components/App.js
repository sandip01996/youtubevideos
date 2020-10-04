import React from 'react';
import SearchBar from './SearchBar';
import youTube from '../Apis/Youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component{

    state ={videos : [],selectedVideo : null};
    componentDidMount(){
        this.onTermSubmit('cars');
    }
    onTermSubmit= async term=>{
        console.log(term);
       const response=await youTube.get('/search',{
            params :{

                q : term
            }
        });
        console.log (response.data.items);
        this.setState({videos :response.data.items,
            selectedVideo:response.data.items[0]

        });
    };

    onVideoSelected=video=>{
        this.setState({selectedVideo :video});
    };
    render(){

        return (
            <div className='ui container'>
               <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                             <VideoDetails video={this.state.selectedVideo}/>
                         </div>
                             <div className='five wide column'>
                               <VideoList onVideoSelected={this.onVideoSelected} videos={this.state.videos}/>
                            </div>
                    </div>
              </div>
            </div>
        );
    }
}

export default App;
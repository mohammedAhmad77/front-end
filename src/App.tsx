import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import PostsPage from "./pages/Posts/Posts";
import AlbumsPage from "./pages/Albums/Albums";

import {
	Switch,
	Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import {PostForm,AlbumForm,UserForm,PhotoForm} from "./models/index";

interface AppState {
  fetchedData:boolean;
  data:{
    posts:PostForm[],
    albums:AlbumForm[],
    users:UserForm[],
    photos:PhotoForm[],
  }
}

interface Props {

}

class App extends Component<Props,AppState> {
  constructor(props:Props){
    super(props);
    this.state = {
      fetchedData:false,
      data:{
        posts:[],
        albums:[],
        users:[],
        photos:[],
      }
    }
  }

  componentDidMount = () => {
    this.fetchData();
  }

  fetchData = async() => {
    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await postsResponse.json();

    const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await usersResponse.json();

    const albumsResponse = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await albumsResponse.json();

    const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await photosResponse.json();

    this.setState(prevState => ({
      data: {
        ...prevState.data,
        posts,
        users,
        albums,
        photos,
      },
      fetchedData:true,
    }))
  }


  render() {
    console.log(this.state.data);
    return (
      <Router>
        <div className="home">
          <div className="home-container">
                <nav className="navbar">
                  <Navbar />
                </nav>
                <section className="main">
                    <div className="main-container">
                      <Switch>
                        <Route
                          exact
                          path="/"
                          render={() => {
                            return (
                            <Redirect to="/posts" />
                            )
                          }}
                        />
                        <Route exact path="/posts">
                          {this.state.fetchedData && <PostsPage data={this.state.data}/>}
                        </Route>
                        <Route exact path="/albums">
                          {this.state.fetchedData && <AlbumsPage data={this.state.data}/>}
                        </Route>
                      </Switch>
                    </div>
                </section>
            </div>
       </div>
      </Router>
    );
  }
}

export default App;
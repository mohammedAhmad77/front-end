import React, { Component } from 'react';
import PostComponent from "../../components/Post/Post";

import {PostForm,AlbumForm,PhotoForm,UserForm} from "../../models/index";

interface Props {
data:{
    posts:PostForm[],
    albums:AlbumForm[],
    users:UserForm[],
    photos:PhotoForm[],
    }
}

class Posts extends Component<Props> {
    

    render() {
        const {data} = this.props;
        return (
            <div className="posts">
                {data.posts.map((post:PostForm,index:number) => (
                    <PostComponent key={index} post={post} users={data.users}/>
                ))}
            </div>
        );
    }
}

export default Posts;
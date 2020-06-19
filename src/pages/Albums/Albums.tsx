import React, { Component } from 'react';

import Album from "../../components/Album/Album";
import {PostForm,AlbumForm,PhotoForm,UserForm} from "../../models/index";

interface Props {
data:{
    posts:PostForm[],
    albums:AlbumForm[],
    users:UserForm[],
    photos:PhotoForm[],
    }
}

class Albums extends Component<Props> {
    render() {
        const {data} = this.props;
        return (
            <div className="albums">
                <div className="albums-container">
                    {data.albums.map((album:AlbumForm,index:number) => (
                        <Album key={index} album={album} users={data.users} photos={data.photos}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Albums;
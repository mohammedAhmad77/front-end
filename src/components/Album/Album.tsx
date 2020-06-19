import React, { Component } from 'react';
import UserInformation from "../UserInformation/UserInformation";

import {UserForm,AlbumForm,PhotoForm} from "../../models/index";



interface Props {
    album:AlbumForm,
    users:UserForm[],
    photos:PhotoForm[],
}

class Album extends Component<Props> {

    getUserById = () => {
        const {album,users}:{album:AlbumForm,users:UserForm[]} = this.props;
        const user:UserForm[] = users.filter((user:any) => user.id === album.userId && user );
        return user[0];
    }

    getPhotosByAlbumId = () => {
        const {album,photos}:{album:AlbumForm,photos:PhotoForm[]} = this.props;
        const data:PhotoForm[] = photos.filter((photo:any) => photo.albumId === album.id);
        return data;
    }

    render() {
        const {album}:{album:AlbumForm} = this.props;
        const user:UserForm = this.getUserById();
        const photos:PhotoForm[] = this.getPhotosByAlbumId();
        return (
            <div className="album">
                <div className="album-container">
                    <UserInformation user={user}/>
                    <div className="album-photos">
                        <img src={photos[photos.length -1].thumbnailUrl} alt={photos[photos.length - 1].title} />
                        <div className="album-details">
                            <div className="album-info">
                                <h4>{album.title}</h4>
                                <span><strong>{photos.length}</strong> photos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Album;
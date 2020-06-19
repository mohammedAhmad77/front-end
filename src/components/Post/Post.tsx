import React, { Component } from 'react';


import UserInformation from "../UserInformation/UserInformation";

import {PostForm,UserForm} from "../../models/index";

interface Props {
    post:PostForm,
    users:UserForm[]
}

class Post extends Component<Props> {
    
    getUserById = () => {
        const {post,users}:{post:PostForm,users:UserForm[]} = this.props;
        const user:UserForm[] = users.filter((user:any) => user.id === post.userId && user );
        return user[0];
    }

    render() {
        const {post}:{post:PostForm} = this.props;

        const user:UserForm = this.getUserById();
        return (
            <div className="post">
                <div className="post-container">
                    <UserInformation user={user}/>
                    <h3 className="post-title">{post.title}</h3>
                    <div className="post-content">
                        <p>{post.body}</p>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Post;
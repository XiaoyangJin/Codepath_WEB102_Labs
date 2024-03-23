import { useState, useEffect } from "react";

const Post = () => {
    useEffect(() => {
        console.log("Post component has mounted")
    }, []);

    return (
        <div className="Post">
            <img src="https://bit.ly/3v3gSeh" width="400px" />
        </div>
    )
}

export default Post;
import { useState, useEffect } from "react";

const Post = () => {
    useEffect(() => {
        // mounting
        console.log("Post component has mounted");

        return () => {
            console.log("Post component has unmounted");
        }
    }, []);

    return (
        <div className="Post">
            <img src="https://bit.ly/3v3gSeh" width="400px" />
        </div>
    )
}

export default Post;
import React from 'react'
import "./Post.css";

function Post() {
  // displayname, username, ifverified, text, img, avatar 
  return (
    <div className='post'>
        <div className="post__avatar">
            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"></Avatar>
        </div>
    </div>
  )
}

export default Post
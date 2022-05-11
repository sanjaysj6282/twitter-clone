// import React from 'react'
// import "./Post.css";
// import {Avatar} from '@mui/material';

// function Post({ displayname, username, ifverified, text, img, avatar}) {
//   // displayname, username, ifverified, text, img, avatar 
//   return (
//     <div className='post'>
//         <div className="post__avatar">
//             <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"></Avatar>
//         </div>
//         <div className="post__body">
//             <div className="post__header">
//                 <div className="post__headerText">
//                     <h3>
//                         Sanjay 
//                         <span>
//                             <VerifiedUserIcon className="post__badge"></VerifiedUserIcon>
//                         </span>
//                     </h3>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post
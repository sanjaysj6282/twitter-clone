import React from 'react'
import "./TweetBox.css"
import {Avatar, Button} from '@mui/material';

function TweetBox() {
  return (
    <div className="tweetbox">
        <form >
            <div className="tweetBox__input">
               <Avatar src="mypic.jpg"></Avatar>
               <input type="Whats happening" /> 
            </div>
        </form>
    </div>
  )
}

export default TweetBox
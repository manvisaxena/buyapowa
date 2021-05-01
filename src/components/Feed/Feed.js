import {useEffect, useState, React} from 'react';
import './Feed.css';

function Feed(props) {
   
  return (
        <div className="display-flex feed text-body">
          <div className="emojiDiv" >
            {props.feed.emoji}
          </div>
          <div className="col" >
            {props.feed.text}
          </div>
        </div>
  );
}

export default Feed;
import {useEffect, useState, React} from 'react';
import './ActivityFeed.css';
import Feed from '../Feed/Feed.js';

function ActivityFeed() {
    const [awardCount, setAwardCount] = useState(0)
    const [feeds, setFeeds] = useState([
        {
            "emoji": "😃",
            "text": "Your friend Mikey earned you a reward!"
        },
        {
            "emoji": "😱",
            "text": "A friend visited your link, but didn't earn you a reward!"
        },
        {
            "emoji": "😳",
            "text": "You tried to refer yourself! Whoops!"
        }
    ])

  return (
        <div>
            <div className="p-20 backgroundColor-gray text-heading bold" >
                Activity Feed
            </div>
            <div className="feedContainer" >
            {
                feeds.map((feed, index) => (
                    <Feed key={index} feed={feed} />
                ))
            }
            </div>
            <div className="p-20 backgroundColor-gray text-heading bold display-flex flex-end" >
                Total Rewards&nbsp;<span className="text-heading bold" >{awardCount}</span>
            </div>
        </div>
  );
}

export default ActivityFeed;
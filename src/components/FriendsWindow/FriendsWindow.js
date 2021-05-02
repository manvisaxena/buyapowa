import React, { Fragment } from 'react';
import MyContext from '../../MyContext';
import './FriendsWindow.css';

export default function FriendsWindow() {
    const setShowFriend = React.useContext(MyContext).setShowFriendPage;
    const addActivityFeed = React.useContext(MyContext).addActivityFeed;
    const addReward = React.useContext(MyContext).addReward;

    var onReject = () => {
        addActivityFeed(2);
        setShowFriend(false);
    }
    var onAccept = () => {
        addActivityFeed(1);
        addReward();
        setShowFriend(false);
    }
    
    return (
        <div className='friendWindow' >
            <MyContext.Consumer>
                { context => (<div className = {context.showFriendPage ? 'show' : 'hide'} data-testid='friendspage'>
                    <h1>Friends window</h1>
                    <button className="backgroundColor-green fs-20 w-200 p-10 m-5" onClick={onAccept}>
                        Accept
                    </button>
                    <button className="backgroundColor-red fs-20 w-200 p-10 m-5" onClick={onReject}>
                        Reject
                    </button>     
                </div>) }
            </MyContext.Consumer>
            
        </div>
    )
}

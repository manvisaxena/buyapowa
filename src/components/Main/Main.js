import './Main.css';
import ReferralWindow from '../ReferralWindow/ReferralWindow.js';
import FriendsWindow from '../FriendsWindow/FriendsWindow';
import React from 'react';

import MyContext from './../../MyContext';


function Main() {
  return (
    <MyProvider>
      <div className="main">
        <ReferralWindow />
        <FriendsWindow />
      </div>
    </MyProvider>
  );
}


class MyProvider extends React.Component {
    state = {
        activityFeed : [
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
        ],
        showFriendPage : false,
        totalReward : 0
    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    activityFeed : this.state.activityFeed, 
                    showFriendPage : this.state.showFriendPage,
                    totalReward: this.state.totalReward,

                    addReward: () => {                      
                      // this.setState({ ...this.state, totalReward: 5});
                      this.state.totalReward = this.state.totalReward + 1;
                      
                    },
                    
                    setShowFriendPage: (isVisible) => {
                      this.setState({ ...this.state , showFriendPage: isVisible });
                    },
                    
                    addActivityFeed: (mode) => {
                      let result = {};
                      switch(mode){
                        // success
                        case 1: {
                          result = {
                            "emoji": "😃",
                            "text": "Your friend Mikey earned you a reward!"
                          }
                          break;
                        }

                        // no Reward
                        case 2: {
                          result = {
                            "emoji": "😱",
                            "text": "A friend visited your link, but didn't earn you a reward!"
                          }
                          break;
                        }

                        // Error-self refer
                        case 3: {
                          result = {
                            "emoji": "😳",
                            "text": "You tried to refer yourself! Whoops!"
                          }
                          break;
                        }
                      };
                      
                      const activityFeed = this.state.activityFeed;
                      if(activityFeed.length <= 3) activityFeed.shift();
                      activityFeed.push(result);
                      this.setState({ activityFeed: activityFeed });
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}



export default Main;
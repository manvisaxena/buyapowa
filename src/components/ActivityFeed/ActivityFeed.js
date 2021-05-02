import {useEffect, useState, React, Fragment, useContext} from 'react';
import './ActivityFeed.css';
import Feed from '../Feed/Feed.js';
import MyContext from '../../MyContext';

function ActivityFeed() {

  return (
        <div>
            <MyContext.Consumer>
                { context => (<Fragment>
                        <div className="p-20 backgroundColor-gray text-heading bold" >
                            Activity Feed
                        </div>
                        <div className="feedContainer" data-testid='feedlist'>
                            {
                                Object.keys(context.activityFeed).map((feed, index) => (
                                    <Feed key={index} feed={context.activityFeed[feed]}  />
                                ))
                            }
                        </div>
                        <div className="p-20 backgroundColor-gray text-heading bold display-flex flex-end" >
                            Total Rewards&nbsp;<span className="text-heading bold" > {context.totalReward} </span>
                        </div>
                    </Fragment>)
                }
            </MyContext.Consumer>
        </div>
  );
}

export default ActivityFeed;
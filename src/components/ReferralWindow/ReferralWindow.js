import './ReferralWindow.css';
import LinkSharer from '../LinkSharer/LinkSharer.js';
import ActivityFeed from '../ActivityFeed/ActivityFeed.js';
import ShareBox from '../ShareBox/ShareBox.js';

function ReferralWindow() {
  return (
    <div className="referralWindow">
      <h1 className="text-heading" >
        We love our super-fans!
      </h1>
      <div className="container" >
        <div className="col" >
          <LinkSharer />
          <p className="text-body" >
            Welcome back, you've referred friends!<br />Keep going for more rewards.
          </p>
          <ActivityFeed />
        </div>
        <div className="col" >
          <ShareBox />
        </div>
      </div>
    </div>
  );
}

export default ReferralWindow;
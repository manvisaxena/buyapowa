import './ShareBox.css';
import SharingOptions from '../SharingOptions/SharingOptions.js';
import EmailBox from '../EmailBox/EmailBox.js';

function ShareBox() {
  return (
    <div className="mt-20 ml-10">
      <SharingOptions />
      <EmailBox />
    </div>
  );
}

export default ShareBox;
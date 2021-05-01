import './SharingOptions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink } from '@fortawesome/free-solid-svg-icons';

function SharingOptions() {
  return (
      <div className="position-relative" >
            <div className="display-flex">
                <button className="copy-button emailButton fs-30 col" >
                    <FontAwesomeIcon className="color-white" icon={faEnvelope} />
                </button>
                <button className="copy-button facebookButton fs-30 col" >
                    <FontAwesomeIcon className="color-white" icon={faFacebook} />
                </button>
                <button className="copy-button twitterButton fs-30 col" >
                    <FontAwesomeIcon className="color-white" icon={faTwitter} />
                </button>
                <button className="copy-button backgroundColor-green fs-30 col" >
                    <FontAwesomeIcon className="color-white" icon={faLink} />
                </button>
            </div>
            <div className="arrow ml-40 position-absolute" ></div>
      </div>
    
  );
}

export default SharingOptions;
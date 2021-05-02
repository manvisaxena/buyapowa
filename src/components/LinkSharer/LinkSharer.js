import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import './LinkSharer.css';
import MyContext from '../../MyContext';

function LinkSharer() {
    const [copySuccess, setCopySuccess] = useState(false)
    const [link, setLink] = useState('link')
    const setShowFriend = React.useContext(MyContext).setShowFriendPage;

    useEffect(() => {
        setLink(`https://things.com/${Math.random().toString(36).substring(7)}`)
        setShowFriend(false);
    }, []);
    
    const copyLinkToClipboard = () => {
        navigator.clipboard.writeText(link)
        setCopySuccess(true);
        setShowFriend(true);        
    }

  return (
    <div className="flex-1">
      
      <p className="text-body" >
          Your unique sharing link
      </p>
      <div className="container">
          <input disabled={true} id="link" className="col text-body backgroundColor-gray p-10 flex-1 input" value={link} />
          <button onClick={(e) => {copyLinkToClipboard()}} className="copy-button backgroundColor-green fs-30" data-testid='copylinkbutton'>
            <FontAwesomeIcon className="color-white" icon={faClipboard} />
          </button>
          
      </div>
      {
          copySuccess && <small className="text-body" >
              Link copied to the clipboard
              
          </small> 
      }
    </div>
  );
}

export default LinkSharer;
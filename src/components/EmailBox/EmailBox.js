import React, { useState } from 'react';
import MyContext from '../../MyContext';
import './EmailBox.css';

function EmailBox() {
    const [toMail, settoMail] = useState('');
    const [message, setmessage] = useState('');

    const fromMail ='james@buyapowa.com';
    const addActivityFeed = React.useContext(MyContext).addActivityFeed;

    let sendEmailClick = () => {
        if(fromMail === toMail){
            addActivityFeed(3);
        }
    }


  return (
    <div className="backgroundColor-gray text-body p-20">
        <div className="mb-10" >
            From&nbsp;&nbsp;
            <span className="text-heading bold" >
                {fromMail}
            </span>
        </div>
        <div className="mb-10" >
            <div className="inputContainer" >
                <input type="email" className="input" placeholder="Email address" onChange={(e)=>{
                    settoMail(e.target.value);
                }}/>
            </div>
        </div>
        <div className="mb-10" >
            <div className="inputContainer" >
                <textarea rows="13" cols="50" className="input" placeholder="Message" />
            </div>
        </div>
        <div >
            <button className="backgroundColor-green fs-20 w-200 p-10" onClick={sendEmailClick}>
                Send email
            </button>
        </div>
    </div>
  );
}

export default EmailBox;
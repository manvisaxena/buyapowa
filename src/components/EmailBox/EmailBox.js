import './EmailBox.css';

function EmailBox() {
  return (
    <div className="backgroundColor-gray text-body p-20">
        <div className="mb-10" >
            From&nbsp;&nbsp;
            <span className="text-heading bold" >
                james@buyapowa.com
            </span>
        </div>
        <div className="mb-10" >
            <div className="inputContainer" >
                <input type="email" className="input" placeholder="Email address" />
            </div>
        </div>
        <div className="mb-10" >
            <div className="inputContainer" >
                <textarea rows="13" cols="50" className="input" placeholder="Message" />
            </div>
        </div>
        <div >
            <button className="backgroundColor-green fs-20 w-200 p-10" >
                Send email
            </button>
        </div>
    </div>
  );
}

export default EmailBox;
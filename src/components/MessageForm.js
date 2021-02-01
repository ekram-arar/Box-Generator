import  React,{ useState } from 'react';
    
    
const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage( msg );
        // what should we do with the message?
    };
    
    return (
        
        <form onSubmit={ handleSubmit }>
             <h1>Color</h1>
            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value )}
                value={ msg }
            ></textarea>
            <br/>
            <input type="submit" value="Add" />
        </form>
    );
};
    
export default MessageForm;
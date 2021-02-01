import './App.css';
import MessageDisplay from './components/MessageDisplay';
import  MessageForm from'./components/MessageForm';
import {useState} from 'react';

function App() {
  const [currentMsg, setCurrentMsg] = useState([]);
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( currentMsg.concat(newMessage) );
  }
  
  return (
    <div className="App">

        <>
        <MessageForm onNewMessage={ youveGotMail }/>
            <MessageDisplay message={ currentMsg } />
            
           
        </>
    </div>
  );
}

export default App;

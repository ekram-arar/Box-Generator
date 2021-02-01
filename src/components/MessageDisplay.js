import React from 'react'
    
    
const MessageDisplay = (props) => {
    return (
        <>
           <br></br>
            <div>{ props.message.map((item, index) => {
                let style={  width: "300px" , background: item ,padding: "20px",
                    margin: "10px", display:"inline"}
                return <div key={index} style={style}>{ item }</div>
            })}</div>
            
        </>
    );
};
    
export default MessageDisplay;
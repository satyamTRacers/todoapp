import React from 'react';

const ChatMessages=(props)=>{
  let chatMessages=props.chatMessages.map(
    (chatMessage,index)=><li key={index}>{chatMessage}</li>
  );

  return(
    <ul className='chat-messages'>
      {chatMessages}
    </ul>
    )
}

export default ChatMessages;
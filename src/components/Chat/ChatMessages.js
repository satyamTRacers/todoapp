import React from 'react';

const ChatMessages = ({chatMessages}) => {

  return(
    <ul className = 'chat-messages'>
      {chatMessages.map(
        (chatMessage,index) => <li key={index}>{chatMessage}</li>
      )}
    </ul>
  )
}

export default ChatMessages;
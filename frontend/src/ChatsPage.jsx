import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '46cb886d-607c-4760-9c4d-82e90848ee6e', 
        props.user.username,
        props.user.secert
    );
    return <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}></MultiChatSocket>
        <MultiChatWindow {...chatProps} style={{height: '100%'}}></MultiChatWindow>
    </div>;
  }
  
  export default ChatsPage;
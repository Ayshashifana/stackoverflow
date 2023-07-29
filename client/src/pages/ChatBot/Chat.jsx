import React,{useState} from 'react'
import "./chat.css"
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY=process.env.REACT_APP_API_KEY;
const Chat = () => {

    const [messages, setMessages] = useState([
        {
          message: "Hello, I'm a ChatBot! Ask me anything!",
          sentTime: "just now",
          sender: "ChatBot"
        }
      ]);

      const [isTyping, setIsTyping] = useState(false);

        const handleSend=async ( message)=>{

            const newMessage={
                message:message,
                sender : "user",
                direction:"outgoing"
            }
            const newMessages=[...messages,newMessage]
            setMessages(newMessages)
            setIsTyping(true)
            await messageToChatBot(newMessages)
}

async function messageToChatBot(chatMessages){
    let apiMessage = chatMessages.map((messageObject)=>{
        let role='';
        if(messageObject.sender === "ChatBot"){
            role="assistant"
        }else{
            role="user"
        }
        return{role:role,content : messageObject.message}
    })

    const systemMessage={
        role:"system",
        content : "Explain all concepts of Programming"
    }

    const apiRequestBody={
        "model":"gpt-3.5-turbo",
        "messages":[systemMessage,...apiMessage]
    }


    await fetch("https://api.openai.com/v1/chat/completions",{
        method:"POST",
        headers:{
            "Authorization":"Bearer "+ API_KEY,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(apiRequestBody)

    }).then((data)=>{
        return data.json();
    }).then((data)=>{
        console.log(data);
        setMessages([...chatMessages,{
            message:data.choices[0].message.content,
            sender : "ChatBot"
        }])
        setIsTyping(false);
    })
}
   
  return (
    <div className="chat-container">
    <img
          src="https://media.istockphoto.com/id/1010001882/vector/%C3%B0%C3%B0%C2%B5%C3%B1%C3%B0%C3%B1%C3%B1.jpg?s=612x612&w=0&k=20&c=1jeAr9KSx3sG7SKxUPR_j8WPSZq_NIKL0P-MA4F1xRw="
          alt="logo"
          height='200px'
          width='200px'
        />
    <div>
    <div style={{ position:"relative", height: "600px", width: "500px"  }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
      
    </div>
  )
}

export default Chat
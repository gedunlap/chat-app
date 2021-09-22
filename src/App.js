import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './Components/ChatFeed'

import './App.css'

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="0e592cd0-47de-4fbb-95ca-b4a79cad2e62"
            userName="GarrettIsHllywd"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App
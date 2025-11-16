import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import ChatInterface from "./components/ChatInterface";
import AboutModal from "./components/AboutModal";

export default function App() {
  const [showChat, setShowChat] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      {!showChat ? (
        <>
          <WelcomeScreen 
            onStartChat={() => setShowChat(true)} 
            onAbout={() => setShowAbout(true)}
          />
          {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
        </>
      ) : (
        <ChatInterface onClose={() => setShowChat(false)} />
      )}
    </>
  );
}
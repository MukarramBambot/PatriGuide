import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Mic, Send } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

// Campus knowledge base
const campusKnowledge = {
  blocks: {
    'a block': 'A Block houses the Department of Computer Application & Computer Science, Administrative & Academic Director\'s Office, Principal\'s Office, Computer Lab, Micro Processor Lab, and Conference Hall.',
    'b block': 'B Block contains the Department of Commerce, Auditorium, Commerce Lab, and the office of Vice Principal (Shift II).',
    'c block': 'C Block houses the Department of Business Administration & HRM, Fintan Hall, Board Room, Innovation Cell, Well Being Centre, Seeds Room, and Ignatius Hall.',
    'd block': 'D Block contains multiple departments including Computer Application & Computer Science (Shift II), Commerce (Shift II), Corporate Secretaryship (Shift II), Accounting and Finance (Shift II), School of Media Studies, Library, Bro. Aloysius Recording Studio, Green Matt Studio, Bro. T Plus – Preview Theatre, Bro. Thanickan – Photo Studio, and Director\'s Office & Accounts Office.',
    'e block': 'E Block houses the Department of English, Psychology, Data Science with CS, Mathematics, Accounting and Finance, Physical Education, Counseling Room, BMS Hall, Exam Office, Vice Principal (Shift I), Delany Hall, and Psychology Lab.'
  },
  facilities: {
    'library': 'The library is located in D Block. It has a vast collection of books, journals, and digital resources.',
    'cafeteria': 'The Student Cafeteria is located near the OAT (Open Air Theatre). There\'s also a Canteen & Patrician Juice Center near the College Gate 2.',
    'auditorium': 'The Auditorium is located in B Block and is used for college events and functions.',
    'basketball court': 'The Basketball Court is located between C Block and D Block.',
    'garden': 'The Patrician Garden is located in the center of the campus, providing a green space for students.',
    'oat': 'The Open Air Theatre (OAT) is located near the Student Cafeteria and is used for outdoor events.',
    'parking': 'There are designated parking areas for students (two-wheeler) and faculty (four-wheeler) near the entrance.',
    'bank': 'There is an HDFC Bank Counter on campus for financial services.'
  },
  departments: {
    'computer': 'The Department of Computer Application & Computer Science is located in A Block. For Shift II, it\'s in D Block.',
    'commerce': 'The Department of Commerce is located in B Block. For Shift II, it\'s in D Block.',
    'business': 'The Department of Business Administration & HRM is located in C Block.',
    'english': 'The Department of English is located in E Block.',
    'psychology': 'The Department of Psychology is located in E Block. There\'s also a Psychology Lab in the same block.',
    'mathematics': 'The Department of Mathematics is located in E Block.',
    'accounting': 'The Department of Accounting and Finance is located in E Block. For Shift II, it\'s in D Block.',
    'media': 'The School of Media Studies is located in D Block along with recording and photo studios.'
  },
  navigation: {
    'entrance': 'The main entrance to the college is through the College Main Gate. There\'s also a College Gate 2 and a separate way to the parking area.',
    'map': 'You can view the interactive campus map on the Campus Map page of this website.',
    'directions': 'To get directions to a specific location, please use the interactive map and click on the location you want to navigate to.'
  },
  general: {
    'about': 'Patrician College of Arts and Science is located in Chennai, Tamil Nadu. The campus has multiple blocks (A to E) housing various departments and facilities.',
    'contact': 'For general inquiries, you can contact the college at +91 1234567890 or email at info@patriciancollege.edu.',
    'emergency': 'For emergencies, contact Security at +91 9876543210 or Medical Emergency at +91 9876543211.'
  }
};

// AI response generator
const generateAIResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  // Check for greetings
  if (/^(hi|hello|hey|greetings)/.test(lowerQuery)) {
    return "Hello! I'm PatriGuide Assistant. How can I help you navigate Patrician College campus today?";
  }
  
  // Check for thanks
  if (/thank|thanks/.test(lowerQuery)) {
    return "You're welcome! Feel free to ask if you need any more information about our campus.";
  }
  
  // Check for blocks
  for (const [key, value] of Object.entries(campusKnowledge.blocks)) {
    if (lowerQuery.includes(key)) {
      return value;
    }
  }
  
  // Check for facilities
  for (const [key, value] of Object.entries(campusKnowledge.facilities)) {
    if (lowerQuery.includes(key)) {
      return value;
    }
  }
  
  // Check for departments
  for (const [key, value] of Object.entries(campusKnowledge.departments)) {
    if (lowerQuery.includes(key)) {
      return value;
    }
  }
  
  // Check for navigation
  for (const [key, value] of Object.entries(campusKnowledge.navigation)) {
    if (lowerQuery.includes(key)) {
      return value;
    }
  }
  
  // Check for specific questions
  if (lowerQuery.includes('where is') || lowerQuery.includes('how to find') || lowerQuery.includes('locate')) {
    if (lowerQuery.includes('library')) return campusKnowledge.facilities.library;
    if (lowerQuery.includes('cafeteria') || lowerQuery.includes('canteen') || lowerQuery.includes('food')) 
      return campusKnowledge.facilities.cafeteria;
    if (lowerQuery.includes('auditorium')) return campusKnowledge.facilities.auditorium;
    if (lowerQuery.includes('basketball') || lowerQuery.includes('court')) 
      return campusKnowledge.facilities.basketball;
    if (lowerQuery.includes('garden')) return campusKnowledge.facilities.garden;
    if (lowerQuery.includes('oat') || lowerQuery.includes('theatre') || lowerQuery.includes('theater')) 
      return campusKnowledge.facilities.oat;
    if (lowerQuery.includes('parking')) return campusKnowledge.facilities.parking;
    if (lowerQuery.includes('bank') || lowerQuery.includes('hdfc')) 
      return campusKnowledge.facilities.bank;
    
    // Generic location response
    return "I can help you locate that. Please check the interactive campus map on the Campus Map page, or be more specific about what you're looking for.";
  }
  
  // Check for general information
  for (const [key, value] of Object.entries(campusKnowledge.general)) {
    if (lowerQuery.includes(key)) {
      return value;
    }
  }
  
  // Default response
  return "I'm not sure about that specific information. I can help you with locations of blocks, departments, facilities, and navigation around Patrician College campus. Could you please rephrase your question?";
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I help you navigate the Patrician College campus today?", isBot: true, timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSend = () => {
    if (!inputText.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: inputText, isBot: false, timestamp: new Date() }]);
    setInputText("");
    setIsTyping(true);
    
    // Generate AI response with a realistic delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputText);
      setMessages(prev => [...prev, { 
        text: aiResponse,
        isBot: true,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleVoiceInput = () => {
    // This is a placeholder for voice recognition functionality
    // In a real implementation, you would use the Web Speech API
    alert("Voice recognition would be implemented here. This feature is coming soon!");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-80 h-96 flex flex-col animate-slide-up">
          <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <h3 className="font-semibold">PatriGuide Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 p-1 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`rounded-lg p-3 max-w-[80%] ${
                    msg.isBot 
                      ? 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100' 
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about campus locations..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <button 
                onClick={handleSend}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors dark:text-blue-400 dark:hover:bg-gray-700"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
              <button 
                onClick={handleVoiceInput}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors dark:text-blue-400 dark:hover:bg-gray-700"
                aria-label="Voice input"
              >
                <Mic size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 animate-bounce-slow"
          aria-label="Open chat assistant"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
import { Link } from 'react-router-dom';
import { FiMessageSquare } from 'react-icons/fi';
import '../style/HistoryPage.css';

// 1. กำหนด Type สำหรับข้อมูลประวัติ
type ChatHistoryItem = {
  id: string;
  title: string;
  date: string;
  lastMessage: string;
};

// 2. สร้างข้อมูลจำลอง (Mock Data)
const mockHistory: ChatHistoryItem[] = [
  { 
    id: '1', 
    title: 'How does AI work in a technical capacity?', 
    date: 'October 21, 2025',
    lastMessage: 'AI, at its core, involves creating algorithms...' 
  },
  { 
    id: '2', 
    title: 'Generate an email reply for a job offer', 
    date: 'October 20, 2025',
    lastMessage: 'Dear [Hiring Manager], Thank you so much for...'
  },
  { 
    id: '3', 
    title: 'Python screen sharing script help', 
    date: 'October 19, 2025',
    lastMessage: 'You need to use socket programming and...'
  },
  { 
    id: '4', 
    title: 'React + TSX typing practice website', 
    date: 'October 18, 2025',
    lastMessage: 'Okay, let\'s start with the useReducer hook for state.'
  },
  { 
    id: '5', 
    title: 'What is a honeypot in cybersecurity?', 
    date: 'October 17, 2025',
    lastMessage: 'A honeypot is a decoy computer system used to...'
  },
];

const HistoryPage = () => {
  return (
    <div className="history-page">
      <div className="history-container">
        
        {/* === ส่วนหัว === */}
        <h1 className="history-title">Chat History</h1>
        <p className="history-subtitle">
          Review your past conversations and continue where you left off.
        </p>

        {/* === รายการประวัติ === */}
        <div className="history-list">
          {mockHistory.length > 0 ? (
            mockHistory.map((chat) => (
              <Link to={`/chat/${chat.id}`} key={chat.id} className="history-item-link">
                <div className="history-item">
                  <div className="history-item-icon">
                    <FiMessageSquare />
                  </div>
                  <div className="history-item-details">
                    <p className="history-item-title">{chat.title}</p>
                    <p className="history-item-excerpt">{chat.lastMessage}</p>
                    <span className="history-item-date">{chat.date}</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="history-empty">You have no chat history yet.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default HistoryPage;
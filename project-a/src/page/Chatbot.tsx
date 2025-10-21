import React, { useState } from 'react';
import {
    FiUser, FiMail, FiFileText, FiRefreshCw,
    FiPaperclip, FiImage, FiArrowRight, FiGlobe, FiChevronDown
} from 'react-icons/fi';
import '../style/Chatbot.css';

const ChatBot = () => {
    const [prompt, setPrompt] = useState('');
    const charLimit = 1000;
    const userName = "Nobpasin Tumdee";

    const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;

        // 1. อัปเดต State
        if (text.length <= charLimit) {
            setPrompt(text);
        }

        // 2. Logic สำหรับ Auto-grow Textarea
        // รีเซ็ตความสูงให้เป็น 'auto' เพื่อให้มันคำนวณ scrollHeight ใหม่ได้ถูกต้อง
        e.target.style.height = 'auto';
        // ตั้งค่าความสูงใหม่ตามเนื้อหาจริง (scrollHeight)
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    return (
        <div className="chatbot-page">
            <div className="chat-content-area">
                <div className="chatbot-container">

                    {/* --- ส่วนหัว --- */}
                    <header className="chatbot-header">
                        <h2>Hi there, {userName}</h2>
                        <h1>What would you like to know?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, asperiores.</p>
                    </header>

                    {/* --- การ์ดคำสั่งแนะนำ --- */}
                    <div className="prompt-suggestions">
                        <button className="prompt-card">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                            <FiUser />
                        </button>
                        <button className="prompt-card">
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <FiMail />
                        </button>
                        <button className="prompt-card">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <FiFileText />
                        </button>
                        <button className="prompt-card">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <FiUser />
                        </button>
                    </div>

                    {/* --- ปุ่ม Refresh --- */}
                    <button className="refresh-prompts">
                        <FiRefreshCw />
                        <span>Refresh Prompts</span>
                    </button>

                    {/* === แชท === */}
                    <div className="example-chat-messages">
                        {/* --- ข้อความจาก User --- */}
                        <div className="chat-message user">
                            <div className="chat-bubble">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, sapiente.</p>
                            </div>
                        </div>

                        {/* --- ข้อความจาก AI --- */}
                        <div className="chat-message ai">
                            <div className="chat-bubble">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sint qui nesciunt, nisi ducimus perferendis sed! Cumque culpa vitae debitis inventore adipisci, repellendus omnis a dolorum doloribus molestias, voluptatum quam.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* === Input (Sticky Bottom) === */}
            <div className="chat-input-sticky-wrapper">
                <div className="chatbot-container">
                    <div className="chat-input-area">


                        <div className="chat-input-wrapper">
                            <div className="input-main">
                                <textarea
                                    id="chat-input"
                                    value={prompt}
                                    onChange={handlePromptChange}
                                    rows={1}
                                    placeholder="Ask whatever you want..."
                                />
                                <button className="web-filter-btn">
                                    <FiGlobe />
                                    <span>All Web</span>
                                    <FiChevronDown />
                                </button>
                            </div>

                            <div className="input-toolbar">
                                <div className="toolbar-left">
                                    <button className="toolbar-btn">
                                        <FiPaperclip />
                                        <span>Add Attachment</span>
                                    </button>
                                    <button className="toolbar-btn">
                                        <FiImage />
                                        <span>Use Image</span>
                                    </button>
                                </div>
                                <div className="toolbar-right">
                                    <span className="char-count">{prompt.length}/{charLimit}</span>
                                    <button
                                        className="send-btn"
                                        aria-label="Send message"
                                        disabled={prompt.length === 0}
                                    >
                                        <FiArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChatBot;
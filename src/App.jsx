import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

import ChatListItem from './components/ChatListItem/ChatListItem';
import ChatIntro from './components/ChatIntro/ChatIntro';
import ChatWindow from './components/ChatWindow/ChatWindow';
import NewChat from './components/NewChat/NewChat';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SearchIcon from '@mui/icons-material/Search';

export default () => {

  const [chatlist, setChatlist] = useState([
    { chatId: 1, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png' },
    { chatId: 2, title: 'Beltrano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png' },
    { chatId: 3, title: 'Ciclano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png' },
    { chatId: 4, title: 'Caltrano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png' }
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState(null);
  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  return (
    <div className='app-window'>
      <div className='sidebar'>
        <NewChat
          chatList={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className='header--avatar' src={user.avatar} alt="" />
          <div className='header--buttons'>
            <div className='header--btn'>
              <DonutLargeIcon style={{ color: "#919191" }}></DonutLargeIcon>
            </div>
            <div onClick={handleNewChat} className='header--btn'>
              <ChatIcon style={{ color: "#919191" }}></ChatIcon>
            </div>
            <div className='header--btn'>
              <MoreVertIcon style={{ color: "#919191" }}></MoreVertIcon>
            </div>
          </div>
        </header>
        <div className='search'>
          <div className='search--input'>
            <SearchIcon fontSize='small' style={{ color: "#919191" }}></SearchIcon>
            <input type="search" placeholder='Procurar ou começar uma nova conversa' />
          </div>
        </div>
        <div className='chatlist'>
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className='contentarea'>
        {activeChat.chatId !== undefined &&
          <ChatWindow
            user={user} />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>

    </div>
  );
}


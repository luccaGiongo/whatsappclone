import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

import ChatListItem from './components/ChatListItem';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SearchIcon from '@mui/icons-material/Search';

export default () => {

  const [chatlist, setChatlist] = useState([{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {}]);

  return (
    <div className='app-window'>
      <div className='sidebar'>
        <header>
          <img className='header--avatar' src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
          <div className='header--buttons'>
            <div className='header--btn'>
              <DonutLargeIcon style={{ color: "#919191" }}></DonutLargeIcon>
            </div>
            <div className='header--btn'>
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
            />
          ))}
        </div>


      </div>
      <div className='contentarea'>adasd</div>

    </div>
  );
}


import './ChatWindow.css';

import { useState, useEffect, useRef } from 'react';

import MessageItem from '../MessageItem/MessageItem';

import EmojiPicker from 'emoji-picker-react';

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

export default ({ user }) => {

    const body = useRef();

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    // State para Audio - Como fazer??
    const [listening, setLintening] = useState(false);
    const [list, setList] = useState([
        { author: 123, body: 'bla bla bla bla' },
        { author: 123, body: 'bla bla bla' },
        { author: 1234, body: 'bla bla' },
        { author: 123, body: 'bla bla bla bla' },
        { author: 123, body: 'bla bla bla' },
        { author: 1234, body: 'bla bla' },
        { author: 123, body: 'bla bla bla bla' },
        { author: 123, body: 'bla bla bla' },
        { author: 1234, body: 'bla bla' },
        { author: 123, body: 'bla bla bla bla' },
        { author: 123, body: 'bla bla bla' },
        { author: 1234, body: 'bla bla' },
        { author: 123, body: 'bla bla bla bla' },
        { author: 123, body: 'bla bla bla' },
        { author: 1234, body: 'bla bla' },
        { author: 123, body: 'bla bla bla bla' },
        { author: 123, body: 'bla bla bla' },
        { author: 1234, body: 'bla bla' },
        { author: 123, body: 'bla bla bla bla' },
        { author: 123, body: 'bla bla bla' },
        { author: 1234, body: 'bla bla' },
    ]);

    useEffect(() => {
        if (body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list])

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji)
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleSendClick = () => {
    }

    const handleMicClick = () => {
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className='chatWindow--avatar' src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                    <div className="chatWindow--name">Lucca Giongo</div>
                </div>
                <div className="chatWindow--headerbuttons">
                    <div className="chatWindow--btn">
                        <SearchIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow--btn">
                        <MoreHorizIcon style={{ color: '#919191' }} />
                    </div>
                </div>
            </div>
            <div ref={body} className="chatWindow--body">
                {list.map((item, key) => (
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}>
                    </MessageItem>
                ))}
            </div>

            <div
                className="chatWindow--emojiarea"
                style={{ height: emojiOpen ? '300px' : '0px' }} >
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                    pickerStyle={{ width: 'auto' }}
                />
            </div>



            <div className="chatWindow--footer">
                <div className="chatWindow--pre">
                    <div
                        className="chatWindow--btn"
                        onClick={handleCloseEmoji}
                        style={{ width: emojiOpen ? 40 : 0 }} >
                        <CloseIcon style={{ color: '#919191' }} />
                    </div>
                    <div
                        className="chatWindow--btn"
                        onClick={handleOpenEmoji}>
                        <EmojiEmotionsIcon style={{ color: emojiOpen ? '#009688' : '#919191' }} />
                    </div>
                </div>
                <div className="chatWindow--inputarea">
                    <input
                        className='chatWindow--input'
                        type="text"
                        placeholder='Digite uma mensagem'
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <div className="chatWindow--pos">
                    {text === '' &&
                        <div
                            className="chatWindow--btn"
                            onClick={handleMicClick}>
                            <MicIcon style={{ color: '#919191' }} />
                        </div>
                    }
                    {text !== '' &&
                        <div
                            className="chatWindow--btn"
                            onClick={handleSendClick}>
                            <SendIcon style={{ color: '#919191' }} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
import './NewChat.css';

import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default ({ user, chatlist, show, setShow }) => {
    const [list, setList] = useState([
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Lucca Giongo' },
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Lucca Giongo' },
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Lucca Giongo' },
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Lucca Giongo' },
    ]);

    const handleClose = () => {
        setShow(false)
    }

    return (
        <div className="newChat" style={{ left: show ? 0 : -415 }}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbuttom">
                    <ArrowBackIcon style={{ color: '#FFFFFF' }} />
                </div>
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={item.avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>

        </div>
    );
}
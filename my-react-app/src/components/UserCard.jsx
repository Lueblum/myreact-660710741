import React from 'react';

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="https://scontent.fkdt3-1.fna.fbcdn.net/v/t39.30808-6/481770242_1900681614004099_8488384883879909559_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=D6uiTGxkF7sQ7kNvwE98KQ3&_nc_oc=Adn3nQsYO9Tdr0_ChdGuYmfA_26Cz4sYjCv8CwYFYi0AaZn2dIGtajf9SKTFla3s1fk&_nc_zt=23&_nc_ht=scontent.fkdt3-1.fna&_nc_gid=wWLigr_q8Gd0MtmfMr7ONg&oh=00_AfXOGO4ICREB5mLq_v9043hudyi8YKyBTdGcSP_hCaerUg&oe=68BB9166" 
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '65px',
            height: '70px',
            border: '3px solid #000000ff'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#050706ff', margin: '10px 0' }}>
        ศิริวุฒิ ชัยเกียรติธรรม 660710741
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#ffffffff', fontSize: '14px' }}>
        นักศึกษา
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #000000ff',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#83b6a2ff',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;
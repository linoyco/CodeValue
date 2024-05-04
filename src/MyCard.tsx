import React from "react";

export interface MyProps {
    title: string;
    content: string;
    date: Date;
    img: string;
}

const MyCard: React.FC<MyProps> = ({ title, content, date, img }) => {
    return (
        <div style={{ width: '230px', height: '300px', border: '2px solid white', borderRadius: '15px', padding: '10px' }}>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <h2 style={{ margin: 0 }}>{title}</h2>
                <div>
                    <span>{content}</span>
                    <img style={{ maxWidth: '200px' }} src={img} />
                    <span>{date.toDateString()}</span>
                </div>
            </div>
        </div>
    )
}

export default MyCard;
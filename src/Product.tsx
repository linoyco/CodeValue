import React from "react";

export interface MyProps {
    id: number;
    name: string;
    content?: string;
    price: number;
    date: Date;
    img: string;
}

const Product: React.FC<MyProps> = ({ name, content, date, img }) => {
    return (
        <div style={{ width: '70%', height: '180px', border: '2px solid white', borderRadius: '10px', padding: '10px', margin: '10px' }}>
            <div style={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>{name}</h2>
                    <span>{content}</span>
                    <img style={{ maxWidth: '200px' }} src={img} />
                    <span>{date.toDateString()}</span>
            </div>
        </div>
    )
}

export default Product;
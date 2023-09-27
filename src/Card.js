import React, { useState } from 'react'; // Import useState từ React để sử dụng state
import './Card.css';

const Card = (props) => {
  const [number, setNumber] = useState(0); // Tạo một state number và mặc định là 0

  return (
    <div style={{ display: 'flex', border: '1px solid blue', alignItems: 'center', width: '400px', justifyContent: 'space-around' }}>
      <div style={{ width: '150px' }}>
        <h3>{props.name}</h3>
        <p>{props.price}$</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          style={{ border: 'none', width: '40px', height: '40px', color: 'white', backgroundColor: 'red' }}
          onClick={() => {
            if (number > 0) {
              setNumber(number - 1); // Khi ấn nút trừ, giảm giá trị number
              props.onGetTotal(-props.price); // Truyền giá trị âm của card cho component cha
            }
          }}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
        <h2 style={{ width: '60px', height: '20px' }}>{number}</h2>
        <button
          style={{
            border: 'none',
            width: '40px',
            height: '40px',
            color: 'white',
            backgroundColor: 'green'
          }}
          onClick={() => {
            setNumber(number + 1); // Khi ấn nút cộng, tăng giá trị number
            props.onGetTotal(props.price); // Truyền giá trị của card cho component cha
          }}
        >
          <i className="fa-solid fa-plus" ></i>
        </button>
      </div>
    </div>
  );
}

export default Card;

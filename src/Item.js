import React, { useState } from "react";
import Card from "./Card";

export const Items = () => {
  const [total, setTotal] = useState(0); // Tạo state để lưu tổng giá trị của các card

  const handGetTotal = (price) => {
    setTotal(total + price); // Cập nhật tổng giá trị khi có sự thay đổi từ các card
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', width: '400px', justifyContent: 'space-around' }}>
        <h2>Your pizza</h2>
        <h3 style={{ width: '70px', borderRadius: '20px', color: 'white', backgroundColor: 'gray' }}>3.00$</h3>
        <button>Reset pizza</button>
      </div>
      <div style={{ border: '1px solid gray' }}>
        {/* Render các card và truyền hàm handGetTotal để cập nhật tổng giá trị */}
        <Card onGetTotal={handGetTotal} name='Cold cuts' price={5} />
        <Card onGetTotal={handGetTotal} name='Pepperonni' price={3.5} />
        <Card onGetTotal={handGetTotal} name='Feta' price={2.5} />
        <Card onGetTotal={handGetTotal} name='Mozzarella' price={1.5} />
        <Card onGetTotal={handGetTotal} name='Swiss cheese' price={3} />
        <Card onGetTotal={handGetTotal} name='Spices' price={0.5} />
        <Card onGetTotal={handGetTotal} name='Vegetable' price={3.25} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <h3>Total</h3>
        <h2>{total.toFixed(2)}</h2>    
      </div>
      <button 
        style={{ width: '100px', height: '30px', backgroundColor: 'green', color: 'white', borderRadius: '5px' }}>
        Chechout
      </button>
    </div>
  );
};

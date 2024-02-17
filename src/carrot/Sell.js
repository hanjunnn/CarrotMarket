import React, { useState } from "react";
import "./Sell.css";
import { Link } from "react-router-dom";

export default function Sell({ addProduct }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    // 입력된 정보를 가공하여 상품 객체를 생성
    const newProduct = {
      id: Math.floor(Math.random() * 1000), // 임의의 ID 생성 (실제로는 더 나은 방법을 사용해야 함)
      name: title,
      price: `${price}원`,
      description: description,
      image: "./image/1.jpg", // 예시로 하드코딩된 이미지 경로
      like: false,
    };

    // 부모 컴포넌트로부터 전달받은 함수를 호출하여 상품 추가
    addProduct(newProduct);
  };

  return (
    <div>
      <div className="header">
        <span>내 물건 팔기</span>
        <Link to="/">
          <div className="close">X</div>
        </Link>
      </div>

      <div className="main">
        <div className="photo">
          <span>사진</span>
          <br />
          <div className="photo1"></div>
        </div>
        <div className="Title">
          <span>제목</span>
          <br />
          <input type="text" className="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="Price">
          <span>가격</span>
          <br />
          <input type="number" className="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="Describe">
          <span>상품 설명</span>
          <br />
          <textarea
            className="describe"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength="200"
            required
          />
        </div>
      </div>
      <Link to="/"> <div className="submit" onClick={handleSubmit}>작성완료</div>       </Link>
    </div>
  );
}
import React from 'react';
import './Recommend.scss';

const Recommend = () => {
  return (
    <div className="recommend">
      <div className="recommend__header">
        <h2>회원님을 위한 추천</h2>
        <span>모두 보기</span>
      </div>
      <div className="recommend__item item">
        <img className="item__profile" src="https://react-instagram.s3.ap-northeast-2.amazonaws.com/profile.jpg" alt=""/>
        <div className="item__detail">
          <h3>baeharam</h3>
          <p>회원님을 팔로우합니다.</p>
        </div>
        <span className="item__follow">팔로우</span>
      </div>
    </div>
  );
};

export default Recommend;
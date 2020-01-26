import React from 'react';
import { Icon } from 'antd';
import './Post.scss';

const Post = () => {
  return (
    <div className="post">
      <div className="post__header">
        <img className="post__profile" src="https://react-instagram.s3.ap-northeast-2.amazonaws.com/profile.jpg" alt=""/>
        <div className="post__intro">
          <p style={{ fontWeight: 'bold' }}>baeharam</p>
          <p>Coding is life</p>
        </div>
      </div>
      <img className="post__photo" src="https://images.unsplash.com/photo-1579956774928-90599249f90f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=744&q=80" alt=""/>
      <div className="post__footer">
        <Icon type="heart" />
      </div>
    </div>
  );
};

export default Post;
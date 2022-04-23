import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg" />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post
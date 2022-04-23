import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
        <div>
        <img src='https://blog.displate.com/wp-content/uploads/2019/06/9d62c24fbe8e89f9cb0582bcf79dbd31_f93fc1570734af15aab950ce5b6f0aba.jpg'/>
        </div>
        <div>
          ava descr
        </div>
        <MyPosts />
      </div>
  )
}

export default Profile
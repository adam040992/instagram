import React from 'react';
import Post from '../Components/Post';

const posts = [
    {
        id: "123",
        username: "Adam",
        userImg: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
        img: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
        caption: "Nice Photo, give us more!!"
    },
    {
        id: "123",
        username: "Adam",
        userImg: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
        img: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
        caption: "Nice Photo, give us more!!"
    },
    {
        id: "123",
        username: "Adam",
        userImg: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
        img: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
        caption: "Nice Photo, give us more!!"
    }
]

export const Posts = () => {
  return (
    <div>
       {posts.map((post) => (
        <Post 
            key={post.id} 
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
        />
       ))}
    </div>
  );
}

export default Posts;

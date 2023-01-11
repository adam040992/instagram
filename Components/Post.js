import React from 'react'

export const Post = ({ id, username, userImg, img, caption}) => {
  return (
    <div>
        {/* Header */}
        <div>
            <img src={userImg} alt={img} />
            <p>{username}</p>
        </div>

        {/* img */}

        {/* caption */}

        {/* comments */}

        {/* input box */}

    </div>
  )
}
export default Post;

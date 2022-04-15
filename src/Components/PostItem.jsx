import React, { useState } from "react";
import Comment from "./Comment";

const PostItem = (props) => {
  const { post, editPost, generateName, generateAvatar, getDateTime, editComment } = props;
  const [commentBoxActive, setCommentBoxActive] = useState(false);
  const timeDate = post.time.split(' ')
  const [upVotes, setUpVotes] = useState(
    post.upVotes === undefined ? 0 : post.upVotes
  );
  const [downVotes, setDownVotes] = useState(
    post.downVotes === undefined ? 0 : post.downVotes
  );

  const initialState = []
  const [comments, setComments] = useState(initialState)

  const handleClick = (button) => {
    switch (button) {
      case 1:
        editPost(post.id, 1, null);
        setUpVotes(upVotes + 1);
        break;
      case 2:
        editPost(post.id, 2, null);
        setDownVotes(downVotes + 1);
        break;
    }
  };

  const toggleCommentBox = () => {
    setCommentBoxActive(!commentBoxActive);
    if(commentBoxActive){
      document.getElementById('comment-box').focus()
    }
  };

  const handleCommentClick = ()=>{
    const comment = document.getElementById('comment-box').value
    const user = generateName()+comments.length
    const imageURL = generateAvatar()
    const id = comments.length
    const data = {
       id: id, user: user, imageURL: imageURL, comment: comment, time: getDateTime()
    }
    setComments(comments.concat(data))
    document.getElementById('comment-box').value = ''
  }

  return (
    <>
      {post.user ? (
        <div className='flex flex-col m-[1.67rem]'>
          <div className='flex items-center'>
            <img
              src={post.imageURL}
              alt='user'
              className='w-[3.125rem] rounded-full'
            />
            <div>
              <p className='text-gray-400 ml-[0.675rem]'>{post.user}</p>
              <p className='text-sm text-gray-400 ml-[0.675rem]'>{timeDate[0]}</p>
              <p className='text-sm text-gray-400 ml-[0.675rem]'>{timeDate[1]}</p>
            </div>
          </div>

          <div className="ml-[3.4rem]">
            <p className='text-2xl text-white mt-[1rem] ml-[0.5rem]'>
              {post.postText}
            </p>

            <div className='flex'>
              <div
                className='flex flex-col items-center mt-[1rem] ml-[0.5rem] hover:cursor-pointer'
                onClick={() => handleClick(1)}
              >
                <i className='fa-regular fa-thumbs-up h-[1.5rem]'></i>
                <p>{upVotes}</p>
              </div>
              <div
                className='flex flex-col items-center mt-[1rem] ml-[1rem] hover:cursor-pointer'
                onClick={() => handleClick(2)}
              >
                <i className='fa-regular fa-thumbs-down h-[1.5rem]'></i>
                <p>{downVotes}</p>
              </div>
              <div
                className='flex flex-col items-center mt-[1rem] ml-[1rem] hover:cursor-pointer'
              >
                <i className="fa-solid fa-square-poll-vertical h-[1.5rem]"></i>
                <p className="text-center">{upVotes - downVotes}</p>
              </div>
              <div
                className='mt-[1rem] ml-[1rem] hover:cursor-pointer'
                onClick={toggleCommentBox}
              >
                <i className="fa-regular fa-message h-[1.5rem]"></i>
              </div>
            </div>

            <div className={`${commentBoxActive ? 'flex':'hidden' } items-center w-[25rem] mt-[0.5rem]`}>
              <input
                type='text'
                placeholder='Comment'
                className='text-xl text-black p-[0.35rem]  bg-white rounded-md w-[22rem] mt-[0.675rem] mr-[0.375rem]'
                autoFocus='on'
                id='comment-box'
              />
              <div className='hover:cursor-pointer mt-[0.675rem]' onClick={handleCommentClick}>
                <i className='fa-solid fa-share h-[1.5rem]'></i>
              </div>
            </div>
          </div>
          {comments.map((comment, i) =>{
              return <Comment key={i} comment={comment} editComment={editComment} postId={post.id}/>
            })}
        </div>
      ) : (
        <div>No Post</div>
      )}
    </>
  );
};

export default PostItem;

import React, { useState } from "react";

const Comment = (props) => {

    const { comment, editComment, postId } = props

    const [upVotes, setUpVotes] = useState(0)
    const [downVotes, setDownVotes] = useState(0)
    const timeDate = comment.time.split(' ')

    const handleClick = (button) => {
        switch (button) {
          case 1:
            setUpVotes(upVotes + 1);
            break;
          case 2:
            setDownVotes(downVotes + 1);
            break;
        }
      };

  return (
    <>
    {comment? (<div className='flex flex-col ml-[3rem] mt-[1rem]'>
      <div className='flex items-center'>
        <img
          src={comment.imageURL}
          alt='user'
          className='w-[3.125rem] rounded-full'
        />
        <div>
          <p className='text-gray-400 ml-[0.675rem]'>{comment.user}</p>
          <p className='text-sm text-gray-400 ml-[0.675rem]'>{timeDate[0]}</p>
          <p className='text-sm text-gray-400 ml-[0.675rem]'>{timeDate[1]}</p>
        </div>
      </div>

      <div className='ml-[3.4rem]'>
        <p className='text-2xl text-white mt-[1rem] ml-[0.5rem]'>
          {comment.comment}
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
          <div className='flex flex-col items-center mt-[1rem] ml-[1rem] hover:cursor-pointer'>
            <i className='fa-solid fa-square-poll-vertical h-[1.5rem]'></i>
            <p className='text-center'>{upVotes - downVotes}</p>
          </div>
        </div>
        </div>
      </div>):
      <div></div>}
    </>
  );
};

export default Comment;

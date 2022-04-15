import React from "react";

const CreatePost = (props) => {

  const handleSubmitClick = ()=>{
    const post = document.getElementById('post').value
    const user = props.generateName()
    const imageURL = props.generateAvatar()
    props.setImageURL(imageURL)
    props.setImageURL((imageURL)=>props.addPost(user, post, imageURL, props.getDateTime()))
  }

  return (
    <div className='flex flex-col m-[1.25rem] items-center'>
      <h1 className='text-4xl font-bold mb-[0.675rem]'>Create a Post</h1>
      <textarea
        className='border-2 border-white bg-gray-600 p-[0.625rem] resize-none text-white rounded-md'
        name='post'
        id='post'
        cols='100'
        rows='10'
        placeholder='Write your post'
      ></textarea>
      <button
        className='border-2 border-white w-[4.375rem] mt-[0.675rem] bg-red-600 text-white hover:bg-white hover:text-red-600 rounded-md'
        onClick={handleSubmitClick}
      >
        Create
      </button>
    </div>
  );
};

export default CreatePost;

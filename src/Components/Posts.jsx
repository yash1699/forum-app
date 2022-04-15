import React from 'react'
import CreatePost from './CreatePost'
import PostItem from './PostItem'

const Posts = (props) => {
  const {allPosts, setImageURL, addPost, editPost, allComments, generateAvatar, getDateTime, generateName, editComment} = props

  return (
    <div>
        <CreatePost setImageURL={setImageURL} addPost={addPost} generateAvatar={generateAvatar} getDateTime={getDateTime} generateName={generateName}/>
        <hr className="m-[1.25rem]"/>
        <h1 className='text-4xl font-bold text-center mt-[2.25rem]'>Posts</h1>
        <div className='flex- flex-col w-full'>
          {allPosts.map((post, i)=>{
              return <PostItem key={i} post={post} editPost={editPost} allComments={allComments} generateAvatar={generateAvatar} getDateTime={getDateTime} generateName={generateName} editComment={editComment}/>
          })}
        </div>
    </div>
  )
}

export default Posts
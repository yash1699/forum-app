import { useState } from "react";
import Posts from "./Components/Posts";
import cartoonAvatar from "cartoon-avatar" ;

function App() {

  const initialState = []
  const [allPosts, setAllPosts] = useState(initialState)
  const [allComments, setAllComments] = useState(initialState)
  const [imageURL, setImageURL] = useState(null)
  const [id, setId] = useState(0)


  const getDateTime = ()=>{
    const today= new Date()
    const date = today.getDate() + '-' + (today.getMonth()+1) +'-' + today.getFullYear()

    const time = today.getHours() + ":" + today.getMinutes()
    
    return time+' '+date
  }

  const generateAvatar = () => {
    return cartoonAvatar.generate_avatar()
  };

  const generateName = () => {
    const names = [
      "James",
      "Joe",
      "Donald",
      "Steve",
      "Bidden",
      "Andrew",
      "Ron",
      "Harry",
      "Tony",
      "Bruce",
      "Tom",
      "Chris",
    ];

    // Function from mozilla website
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    };

    let name = names[getRandomInt(0, names.length + 1)] + '#' +(id+1);

    return name;
  };

  

  const editComment = (_postId, _commentId, editType) => {
    const _allPosts = allPosts
    const post = _allPosts[_postId]
    const comment = post.comments[_commentId]

    
    switch(editType) {
      // Give a Upvote to the post
      case 1:
        comment.upVotes = comment.upVotes === null ? 1 : comment.upVotes+1
        break
      
      // Give a Downvote to the post
      case 2:
        comment.downVotes = comment.downVotes === null ? 1 : comment.downVotes+1
        break
    }

    post.comments[_commentId] = comment
    _allPosts[_postId] = post
    setAllPosts(_allPosts) 
  }

  const editPost = (_id, editType, editData) => {
    const _allPosts = allPosts
    const post = _allPosts[_id]
    switch(editType) {
      // Give a Upvote to the post
      case 1:
        post.upVotes = post.upVotes === null || post.upVotes === undefined ? 1 : post.upVotes+1
        break
      
      // Give a Downvote to the post
      case 2:
        post.downVotes = post.downVotes === null || post.downVotes === undefined ? 1 : post.downVotes+1
        break
      
      // Give a comment on the post
      case 3:
        post.comments === undefined ? post.comments = [editData] : post.comments = post.comments.concat(editData)
        setAllComments(allComments.concat(editData))
        break
    }

    _allPosts[_id] = post
    setAllPosts(_allPosts)
  }

  const addPost = (_user, _postText, _imageURL, _time)=>{
    setAllPosts(allPosts.concat({id: id, user: _user, postText: _postText, imageURL: _imageURL, time: _time}))
    setId(id+1)
  }


  return (
    <div>
      <Posts allPosts={allPosts} setImageURL= {setImageURL} addPost={addPost} editPost={editPost} allComments={allComments} getDateTime={getDateTime} generateAvatar={generateAvatar} generateName={generateName} editComment={editComment}/>
    </div>
  );
}

export default App;

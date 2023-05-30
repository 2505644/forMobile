import React from 'react'
import PostItem from './PostItem'

const PostList = ({posts}) => {
  return (
    <div className="projects__tbl">
      {posts.map(post =>
        <PostItem post={post} key={post.id} />
      )}
    </div>
  )
}

export default PostList

import React from 'react'
import bpp from '../img/Group 35.svg';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
  const navigate = useNavigate()
  function router(){                                          
    navigate(`/project/${props.post.id}`)
  }
  return (
    <div onClick={router} className="projects__tbl__item">
      <div className='projects__tbl__item-gradient'>
      <img className='projects__tbl__item-img' src={props.post.image_dark}></img>
      <div className="projects__tbl__item-logo">
        <img src={bpp}></img>
      </div>
      <div className="projects__tbl__item-header">{props.post.title}</div>
      <div className="projects__tbl__item-description">
        {props.post.description}
      </div>
      </div>
    </div>
  )
}

export default PostItem

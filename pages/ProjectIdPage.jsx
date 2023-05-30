import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";


const ProjectIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching( async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data);
  })

  useEffect(() => {
    fetchPostById(params.id)
  },[])
  return (
    <div className="wrapper">
      <div className="wrapper-top">
        <hr className="hr"></hr>
        <div className="container">
          <Header />
          <div className='pagepost__menu'>
            <a className='pagepost__menu-link'>Главная/</a>
            <a className='pagepost__menu-link'>Проекты/</a>
            <p className='pagepost__menu-prgh'>{}</p>
            <div>{}</div>
            <div> 
              Тут вприницпе точно так же, вывод информации о постах с сервера, ничего нового применять не надо, а писать одно и то же мне лень
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectIdPage

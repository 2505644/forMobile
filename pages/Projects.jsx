import React, { useEffect, useState } from "react";
import cl from '../styles/app.css';
import Header from "../components/Header";
import bp from '../img/Group 120.svg';
import PostList from "../components/PostList";
import WrapperBot from "../components/FeedbackForm";
import PostService from "../API/PostService";
import logoFooter from '../img/logoFooter.svg'
import FeedbackForm from "../components/FeedbackForm";
function Projects() {
  const [posts, setPosts] = useState([
  ])
  async function fetchPosts() {
    const posts = await PostService.getAll();
    setPosts(posts)
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper-top">
          <hr className="hr"></hr>
          <div className="container">
            <Header />
            <div className="link">
              <a className="link-main" href="#">Главная/</a>
              <p className="link-project" href="#">Проекты</p>
            </div>
            <div className="projects">
              <h2 className="projects__header">Проекты</h2>
              <div className="projects__btns">
                <button className="projects__btns-item">Продвижение</button>
                <button className="projects__btns-item">Разработка</button>
                <button className="projects__btns-item">Мобильное приложение</button>
                <button className="projects__btns-item">Юзабилити - аудит</button>
              </div>
              <PostList posts={posts} />
              <hr className="hr1"></hr>
            </div>
          </div>
        </div>
        <FeedbackForm/>
        <footer className="footer">
          <div className="container">
            <hr></hr>
            <div className="footer-columns">
          <div className="footer-column1">
            <img className="footer-column1-img" src={logoFooter}></img>
            <p className="footer-column1-prgh">Web and machine learning developing company</p>
          </div>
          <div className="footer-column2">
            <ul>
              <li className="footer-column2-element"><a  href="#">+7 499 679 45 79</a></li>
              <li className="footer-column2-element"><a  href="#">hello@cyberia.ru</a></li>
              <li className="footer-column2-element"><a  href="#">Аносова 3Б, оф. 1</a></li>
            </ul>
          </div>
          <div className="footer-column3">
            <ul>
              <li className="footer-column3-element"><a  href="#">Главная</a></li>
              <li className="footer-column3-element"><a  href="#">Услуги</a></li>
              <li className="footer-column3-element"><a  href="#">Проекты</a></li>
            </ul>
          </div>
          <div className="footer-column4">
            <ul>
              <li className="footer-column4-element"><a  href="#">Блог</a></li>
              <li className="footer-column4-element"><a  href="#">О нас</a></li>
              <li className="footer-column4-element"><a  href="#">Команда</a></li>
            </ul>
          </div>
          <div className="footer-column5">
            <ul className="footer-column5">
              <li><a href="#">2022, digital-агентство Cyberia</a></li>
              <li><a href="#">Положение о защите персональных данных</a></li>
              <li><a href="#">Политика в отношении обработки <br /> и защиты персональных данных</a></li>
              <li><a href="#">Оферта оказания услуг</a></li>
            </ul>
          </div>
            </div>
            <hr></hr>
            </div>
        </footer>
      </div>
    </div>
  );
}

export default Projects;

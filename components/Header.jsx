import React, { useState } from 'react'
import logo from '../img/logo.svg'
import color from '../img/color.svg'
import bm from '../img/Menu-burger.svg'
import Menu from '../Menu/Menu'
const Header = () => {
  const [menuActive, setMenuActive] = useState(false)
  const items = [{value:'Главная', href: '/#'}, {value:'О нас', href: '/#'}, {value:'Услуги', href: '/#'},{value:'Проекты', href: '/projects'},{value:'Блог', href: '/#'}]
  const contacts = [{value: '+7 499 679 45 79'}, {value: 'hello@cyberia.ru'}, {value: 'Аносова 3Б, оф. 1'}]
  return (
    <header className="header">
            <a class="header__logo" href="#">
              <img class="header__logo1" src={logo} />
            </a>
            <div className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">О нас</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">Услуги</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">Проекты</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">Блог</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">Контакты</a>
              </li>
            </ul>
            </div>
            <a class="header__colour" href="#">
              <img src={color} />
            </a>
            <div className='burger-btn' onClick={() => setMenuActive(!menuActive)} >
              <img src={bm} />
            </div>
            <Menu active={menuActive} setActive={setMenuActive} items={items} contacts={contacts}></Menu>
          </header>
  )
}

export default Header

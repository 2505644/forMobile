import React from 'react'
import './Menu.css'
const Menu = ({contacts, items, active, setActive}) => {
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
      <div className='menu__content'>
        <ul className='menu__ul1' >
          {items.map(item => 
            <li className='menu__li1'>
              <a onClick={e => e.stopPropagation()} className='menu__a' href={item.href}>{item.value}</a>
            </li>
            )}
        </ul>
        <hr className='menu__hr'></hr>
        <ul className='menu__ul2' >
          {contacts.map(contact => 
            <li  className='menu__li2'>
              {contact.value}
            </li>
            )}
        </ul>
        <hr className='menu__hr'></hr>
      </div>
    </div>
  )
}

export default Menu

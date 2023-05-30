import React from 'react'
import tellForm from '../img/tellform.svg';
import papaerClip from '../img/Paperclip.svg';
const FeedbackForm = () => {
  

  return (
    <div className="wrapper-bot">
          <div className="container">
            <hr className="hr2"></hr>
            <div className="tellForm">
              <div className="tellForm__text">
                <div className="tellForm__text-img">
                  <img className="tf-img" src={tellForm} />
                </div>
                <div className="tellForm__text-header">Расскажите о вашем проекте</div>
                <div className="tellForm__text-prgp">Поделитесь с нами информацией, чем мы можем быть полезны: реализовать идею или выделить
                  разработчиков для ИТ-команды. Чем больше вы нам расскажете — тем продуктивнее будет дальнейшее обсуждение.</div>
              </div>
              <div className="tellForm__data">
                <div className="tellForm__data-up">
                  <form id="form">
                  <div class="tellForm__data-email">
                    <form class="tellForm__data-email-form"></form>
                    <input name='user_email' class="tellForm__data-email-border" type="email" placeholder="E-mail" />
                  </div>
                  <div class="tellForm__data-phone">
                    <form class="tellForm__data-phone-form"></form>
                    <input name='user_phone' class="tellForm__data-email-border" type="text" placeholder="Телефон" />
                  </div>
                  <div class="tellForm__data-text">
                    <form class="tellForm__data-text-form">
                      <img className="tellForm__data-text-paperClip" src={papaerClip} />
                    </form>
                    <textarea name='user_text' class="tellForm__data-text-border tellForm__data__text-message" type="text"
                      placeholder="Сообщение"></textarea>
                  </div>
                  </form>
                </div>
                <div className="tellForm__data-down">
                  <button type='submit' className="tellForm__data-down-btn">ОТПРАВИТЬ</button>
                  <p className="tellForm__data-down-prgh">Нажимая “Отправить”, Вы даете согласие на обработку персональных данных</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr3"></hr>
        </div>
  )
}

export default FeedbackForm

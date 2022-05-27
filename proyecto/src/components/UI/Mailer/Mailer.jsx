import React from 'react';
import emailjs from '@emailjs/browser';

export const Mailer = () => {
    const sendEmail = (event) => {
        event.preventDefault();
    
        emailjs.sendForm('service_dgkelgb','template_kyy3x2k',event.target,'A51WuRiTF75yWgkX-')
        .then(response => alert("Enviado",response))
        .catch(error => alert("Error",error))
      } 
  return (
    <div className="form">
        <h1 className="title_ContactUs">Contactanos</h1>
        <form className="form-mail" onSubmit={sendEmail}>
            <label className="form-label">Nombre</label>
            <input type="text" name="user_name" class="form-control" id="exampleFormControlInput1"></input>
            <br />
            <label className="form-label">Email</label>
            <input type="email" name="user_email" class="form-control" id="exampleFormControlInput1"></input>
            <br />
            <label>Mensaje</label>
            <textArea name="user_message" className="form-control" columns ="05" id="exampleFormControlTextarea1" rows="10"></textArea>
            <br />
            <button className='send_Button'>Enviar</button>
        </form>
    </div>
  )
}

import { useTranslation } from 'react-i18next';
import React, { useState } from "react";

function Form() {
  const { t } = useTranslation(['contact']);
  const [status, setStatus] = useState("");

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/f/xdopzjdk"
      method="POST"
    >
      <h2>{t('form.title', 'default')}</h2>
      <p>{t('form.sub-title', 'default')}</p>

      <div>
        <input className="text-input" type="text" name="name" placeholder={t('form.name', 'default')} />
      </div>

      <div>
        <input className="text-input" type="email" name="email" placeholder={t('form.email-details', 'default')} />
      </div>

      <div>
        <input className="text-input" type="tel" name="phone" pattern="[0-9]+" placeholder={t('form.phone-details', 'default')} />
      </div>

      <div>
        <label>{t('form.contact-type', 'default')}</label>
        <div className="radio-buttons">
          <div>
            <input type="radio" name="type" id="phone" value="phone" />
            <label for="phone">{t('form.phone', 'default')}</label>
          </div>
          <div>
            <input type="radio" name="type" id="email" value="email" />
            <label for="email">{t('form.email', 'default')}</label>
          </div>
        </div>
      </div>

      <div>
        <label>{t('form.text', 'default')}</label>
        <div>
          <textarea className="text-input big-text" type="text" name="text" />
        </div>
      </div>

      <div className="submit-form">
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="fact-button">Let me know</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </div>



    </form>
  );
}

export default Form;
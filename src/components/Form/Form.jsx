import React, { useEffect, useRef } from 'react';
import './form.scss';

const Form = ({ setToggleForm, activeEntry, updateEntry}) => {

  const formRef = useRef();

    useEffect(() => {
        const close = (e) => {
        if (!formRef.current.contains(e.target)) {
            setToggleForm(false);
        }
        };

        document.addEventListener('mousedown', close);

        return() => {
        document.removeEventListener('mousedown', close);
        }
    });

  const editEntry = (inputField, value) => {

    updateEntry({
        ...activeEntry,
        [inputField]: value,
        lastModified: Date.now()
    })
  };

  return (
    <form className="journal__form fixed" ref={formRef}>
        <input 
            type="text" 
            name="title" 
            className="title" 
            value={activeEntry.title} 
            onChange={(e) => editEntry("title", e.target.value)}
        />

        <textarea 
            name="message" 
            className="message" 
            placeholder="What are you thinking about?" 
            value={activeEntry.content}
            onChange={(e) => editEntry("content", e.target.value)}
        >

        </textarea>
           
        <div className="btn__cont flex">
          <button 
              className="save"
              onClick={()=> setToggleForm(false)}
          >
              Save <i class="bi bi-arrow-right"></i>
          </button>
        </div>
    </form>
  );
};

export default Form;
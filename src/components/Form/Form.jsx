import React from 'react';
import './form.scss';

const Form = ({ setToggleForm, activeEntry, updateEntry }) => {

  const editEntry = (inputField, value) => {

    updateEntry({
        ...activeEntry,
        [inputField]: value,
        lastModified: Date.now()
    })
  };

  return (
    <form className="journal__form fixed">
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
           
        <button 
            className="save flex"
            onClick={()=> setToggleForm(false)}
        >
            Save <i class="bi bi-arrow-right"></i>
        </button>
    </form>
  );
};

export default Form;
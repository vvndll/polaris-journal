import React from 'react';
import './main.scss';

const Journal = ({entries, addJournalEntry, deleteJournalEntry, activeEntry, setActiveEntry, setToggleForm}) => {

  const sortedEntries = entries.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className='main__container'>
        <header className="journal__header flex">
            <h2 className="heading">Journal</h2>
        </header>

        <section className="journal__display">
            {sortedEntries.map(({ id, title, content, lastModified }, i) => (
                <div className="journal__item flex">
                    <div className="journal__options flex">
                        <button 
                            className="edit"
                            onClick={ function () {setToggleForm(true); setActiveEntry(id)}}

                        >
                            <i className="bi bi-pencil-square"></i>
                        </button>
                        <button 
                            className="delete"
                            onClick={() => deleteJournalEntry(id)}
                        >
                            <i className="bi bi-trash"></i>
                        </button>
                    </div>

                    <div className="journal__preview grid" key={id}>
                        <div className="journal__title"><strong>{title}</strong></div>
                        <div className="journal__content">
                            <div className="ticker__container">
                                <div className="ticker__move flex">
                                    <span className="ticker__item">{content && content.substr(0, 100)}</span>
                                    <span className="ticker__item">{content && content.substr(0, 100)}</span>
                                    <span className="ticker__item">{content && content.substr(0, 100)}</span>   
                                </div>
                            </div>
                        </div>
                        <small className="journal__date">`last modified: {new Date(lastModified).toLocaleDateString("en-US", {hour: "2-digit", minute: "2-digit"})}`</small>
                    </div>
                
                </div>
            ))}
            
        </section>
    </div>
  );
};

export default Journal;
import React, {useState, useEffect} from 'react';
import './app.scss';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';

const App = () => {
  const [entries, setEntries] = useState( localStorage.entries ? JSON.parse(localStorage.entries) : []);

  const [activeEntry, setActiveEntry] = useState([false]);

  const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries))
  }, [entries]);

  const addJournalEntry = () => {
    const uniqueId = () => parseInt(Date.now() * Math.random()).toString();

    const newEntry = {
      id: uniqueId(),
      title: "Untitled",
      content: "No Content",
      lastModified: Date.now()
    }; 

    setEntries([newEntry, ...entries]);
  };

  const deleteJournalEntry = (entryIdToDelete) => {
    setEntries(entries.filter((entry) => entry.id !== entryIdToDelete))
  };

  const getActiveEntry = () => {
    return entries.find((entry) => entry.id === activeEntry);
  };

  const updateEntry = (updatedEntry) => {
    const updatedEntries = entries.map((entry) => {
      if(entry.id === activeEntry) {
        return updatedEntry;
      };

      return entry;
    });

    setEntries(updatedEntries);
  };
  
  return (
    <div className='flex'>
        <Sidebar addJournalEntry={addJournalEntry}/>
        <div className="second__container flex">
            <Main 
              entries={entries} 
              addJournalEntry={addJournalEntry} 
              deleteJournalEntry={deleteJournalEntry}
              activeEntry={activeEntry}
              setActiveEntry={setActiveEntry}
              setToggleForm={setToggleForm}
          />

          {toggleForm && (<Form setToggleForm={setToggleForm} activeEntry={getActiveEntry()} updateEntry={updateEntry} />)}
            </div>
    </div>
  );
};

export default App;

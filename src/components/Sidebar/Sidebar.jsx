import React from 'react';
import './sidebar.scss';

const Sidebar = ({addJournalEntry}) => {
  return (
    <aside className="sidebar flex">
            <h1 className="logo">Polaris</h1>
            
            <button 
                className="add"
                onClick={addJournalEntry}
            >
                <i className="bi bi-plus-circle-fill"></i>
            </button>
    </aside>
  )
}

export default Sidebar;
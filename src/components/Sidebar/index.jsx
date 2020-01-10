import React, { useState } from 'react';
import { ReactComponent as CloseIcon } from '../../assets/times-solid.svg';
import data from './fixtures'
import './Sidebar.scss';


function ListItem({ id, icon, text, optional, color, handleColor }) {
  const handleClick = (e) => {
    if(e.currentTarget.dataset.id){
      handleColor(id)
    }
  }

  return(
    <li data-id={id} className={color} onClick={handleClick}>{icon}{text}{optional}</li>
  );
};

function Sidebar({ showBar, closeSideBar }) {
  const [id, setId] = useState(-1);
  const handleColor = ( newId ) => {
    setId(newId)
  }
  const handleCloseSideBar = () => {
    closeSideBar(false);
  }
  return (
    <div className={`sidebar ${showBar && 'sidebar-show'}`}>
      <div className="brand">
        <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1578560585/prospa_logo_2.jpg" alt="prospa logo" />
        <p>prospa</p>
      </div>
      <CloseIcon className="close-icon" onClick={handleCloseSideBar} />
      <ul className="sidebar-links">
        {data.map((data, i) => {
          return(
            <ListItem 
              id={data.id}
              icon={data.icon}
              text={data.text}
              optional={data.optional}
              color={id === i ?  'bg-pink' : 'bg-purple'}
              handleColor={handleColor}
            />
          )
        })}
      </ul>
      <div className="light-purple-design"></div>
      <div className="pink-design"></div>
    </div>
  );
}

export default Sidebar;
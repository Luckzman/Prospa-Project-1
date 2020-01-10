import React from 'react';
import {ReactComponent as PlusIcon} from '../../assets/plus-solid.svg';
import './NewCard.scss';


function NewCard() {
  return (
    <div className="new-card">
      <div className="icon">
        <PlusIcon className="plus-icon"/>
      </div>
      <p>Add a new account</p>
    </div>
  );
}

export default NewCard;
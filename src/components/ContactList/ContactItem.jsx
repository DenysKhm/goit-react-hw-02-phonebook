import React from 'react';
import css from './ContactList.module.css';

export default class ContactItem extends React.Component {
    render() {
        const { id, name, number, onDeleteContact } = this.props;
        return (
            <>
            <p className={css.contact}>{name}: {number}</p>
            <button 
            id={id}
            type="button"
            onClick={onDeleteContact}>
              Delete
            </button>
          </>
        );
      }
}
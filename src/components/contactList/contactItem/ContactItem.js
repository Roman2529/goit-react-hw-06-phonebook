import React from 'react';
import styles from './contactItem.module.css';
import { delMyContact } from '../../redux/contacts/actions';
import { connect } from 'react-redux';

function ContactItem({ delMyContact, contact: { name, number, id } }) {
  return (
    <li className={styles.contactItems}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        data-id={id}
        onClick={() => {
          delMyContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  delMyContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);

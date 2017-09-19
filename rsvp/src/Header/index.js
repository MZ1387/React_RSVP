import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';

const Header = props => {
  return (
    <header>
      <h1>RSVP</h1>
      <p>A Treehouse App</p>
      <GuestInputForm
        newGuestSubmitHandler={props.newGuestSubmitHandler}
        pendingGuest={props.pendingGuest}
        handleNameInput={props.handleNameInput}
      />
    </header>
  );
}


Header.PropTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired
}

export default Header;

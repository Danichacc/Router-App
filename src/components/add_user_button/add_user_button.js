import React from 'react';
import {connect} from 'react-redux';
import {toggleForm} from '../../actions';
import './add_user_button.css';

class _AddUserButton extends React.Component {
    render() {
        return (
            <button
                className='add-user-button'
                onClick={() => this.props.formOpen()}
            >
                Add User
            </button>
        );
    }
}

export const AddUserButton = connect(null, {formOpen: toggleForm})(_AddUserButton);

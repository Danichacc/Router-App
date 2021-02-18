import React from 'react';
import {connect} from 'react-redux';
import {toggleForm, createUser, deleteUser, editCurrentUser, fetchData, updateUser} from '../../actions';
import './form_user.css';

class _FormUser extends React.Component {
    render() {
        const namePattern = /^[A-Za-zА-Яа-я]+$/;
        const phonePattern = /^\d+$/;
        const {currentUser} = this.props;

        const isEnabled = currentUser.name.match(namePattern)
            && currentUser.surname.match(namePattern)
            && currentUser.phone.match(phonePattern);

        return (
            <div className='form-wrapper'>
                <div className='form-user'>
                    <button
                        className='form-close'
                        onClick={() => this.props.closeForm()}
                    >
                        X
                    </button>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        pattern='[A-Za-zА-Яа-я]+'
                        value={currentUser.name}
                        onChange={event => this.props.changeInput('name', event.target.value)}
                    />
                    <label htmlFor='surname'>Surname</label>
                    <input
                        type='text'
                        name='surname'
                        pattern='[A-Za-zА-Яа-я]+'
                        value={currentUser.surname}
                        onChange={event => this.props.changeInput('surname', event.target.value)}
                    />
                    <label htmlFor='phone'>Phone</label>
                    <input
                        type='tel'
                        name='phone'
                        pattern='[0-9]+'
                        value={currentUser.phone}
                        onChange={event => this.props.changeInput('phone', event.target.value)}
                    />
                    <div className='form-controls'>
                        <button
                            onClick={() => {
                                if (this.props.users.some(user => user.id === this.props.currentUser.id)) {
                                    this.props.editUser(currentUser);
                                } else {
                                    this.props.addUser(currentUser);
                                }
                                this.props.closeForm();
                            }}
                            disabled={!isEnabled}
                        >
                            Save
                        </button>
                        <button
                            onClick={() => {
                                this.props.removeUser(currentUser);
                                this.props.closeForm();
                            }}
                            disabled={currentUser.id === ''}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        currentUser: state.currentUser,
    }
}

export const FormUser = connect(mapStateToProps, {
    readUsers: fetchData,
    addUser: createUser,
    editUser: updateUser,
    removeUser: deleteUser,
    changeInput: editCurrentUser,
    closeForm: toggleForm,
})(_FormUser);

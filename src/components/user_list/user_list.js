import React from 'react';
import {AddUserButton} from '../add_user_button/add_user_button';
import {connect} from 'react-redux';
import {setCurrentUser, toggleForm} from '../../actions';
import './user_list.css';

class _UserList extends React.Component {
    render() {
        return (
            <div className='user-list'>
                {this.props.users.map((user, index) => (
                    <span
                        className='user'
                        key={index}
                        onClick={() => {
                            if (!this.props.isFormOpen) {
                                this.props.formOpen();
                            }
                            this.props.formFill(user);
                        }}
                    >
                        {user.name} {user.surname}
                    </span>
                ))}
                <AddUserButton />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isFormOpen: state.isFormOpen,
        users: state.users,
    }
}

export const UserList = connect(mapStateToProps, {
    formFill: setCurrentUser,
    formOpen: toggleForm,
})(_UserList);

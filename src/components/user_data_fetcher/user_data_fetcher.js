import React from 'react';
import {UserList} from '../user_list/user_list';
import {FormUser} from '../form_user/form_user';
import {Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchData} from '../../actions';
import './user_data_fetcher.css';

class _UserDataFetcher extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const {isFormOpen} = this.props;
        const form = isFormOpen && <FormUser />

        return (
            <div className='user-wrapper'>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contacts'>Contacts</Link>
                </nav>
                <Switch>
                    <Route path='/about'>
                        <div className='content'>
                            This is scratch of contacts book app.
                        </div>
                    </Route>
                    <Route path='/contacts'>
                        <UserList />
                        {form}
                    </Route>
                    <Route path='/' exact>
                        <div className='content'>Contacts book app with router.</div>
                    </Route>
                </Switch>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isFormOpen: state.isFormOpen,
    }
}

export const UserDataFetcher = connect(mapStateToProps, {getUsers: fetchData})(_UserDataFetcher);

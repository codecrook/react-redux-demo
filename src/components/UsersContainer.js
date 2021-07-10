import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

function UsersContainer({ userData, fetchUsers }) {
    useEffect(() => fetchUsers(), []);

    return (
        <div>
            {userData && userData.loading && <h2>Loading...</h2>}
            {userData && userData.error && <h2 style={{ color: 'red' }}>{userData.error}</h2>}
            {userData && userData.users && userData.users.length > 0 &&
                <div>
                    <h2>Users List</h2>
                    {userData.users.map(user => <p key={user.id}>{user.name}</p>)}
                </div>
            }
        </div>
    );
}

const mapStateToProps = state => ({ userData: state.user });
const mapDispatchToProps = dispatch => ({ fetchUsers: () => dispatch(fetchUsers()) });

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

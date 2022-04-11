import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/actions-creator/user";
import useActions from "../hooks/useActions";

const UserList = () => {
    const {users, error, loading} = useTypedSelector(state => state.user);
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, []);

    if (loading) return (<h1>Loading...</h1>);
    if (error) return (<h1>{error}</h1>)
    return (
        <div>
            <button onClick={()=>console.log(users)}>qwe</button>
            {users.map(x=>(
                <div key={x.id}>{x.name}</div>
            ))}
        </div>
    );
};

export default UserList;
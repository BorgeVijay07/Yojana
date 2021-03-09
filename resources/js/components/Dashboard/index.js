import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'


const Dashboard = () => {

    useEffect(() => {
        if(!localStorage.getItem('user_info'))
        {
            history.push('/sign-up');
        }
    }, [])

    const history = useHistory();

    return (
        <>
            <div className='dashboard1'>
                <h1>Dashboard Page</h1>
            </div>
        </>
    )
}

export default Dashboard

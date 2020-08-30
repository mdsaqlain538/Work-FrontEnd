import React from 'react'
import Base from '../core/Base';
import {isAuthenticated} from '../auth/helper/index';
import {Link} from 'react-router-dom';

export default function Welcome() 
{
    const {
        user:{first,last,school,address,city,email,mobile}
    } = isAuthenticated();
    return (
        <Base title="Pariksha-Dashboard" 
        description="This Task is Completed."
        className='container bg-info p-4'
        >
            <div className='row'>
                <div className='col text-light'>
                    <p>Welcome {first} {last}</p>
                </div>
            </div>
        </Base>
    )
}

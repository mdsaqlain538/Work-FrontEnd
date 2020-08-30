import React from 'react'
import Base from '../core/Base';
import {isAuthenticated} from '../auth/helper/index';
import {Link} from 'react-router-dom';

export default function UserDashBoard() 
{

    const AdminRightSide = () =>{
        return (
            <div className='card mb-4'>
                <h4 className='card-header'>User Information</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <span className='badge badge-primary mr-2'>
                                First Name:
                        </span>{first}
                    </li>
                    <li className='list-group-item'>
                        <span className='badge badge-primary mr-2'>
                                Last Name:
                        </span>{last}
                    </li>
                    <li className='list-group-item'>
                        <span className='badge badge-primary mr-2'>
                                School Name:
                        </span>{school}
                    </li>
                    <li className='list-group-item'>
                        <span className='badge badge-primary mr-2'>
                                Address:
                        </span>{address}
                    </li>
                    <li className='list-group-item'>
                        <span className='badge badge-primary mr-2'>
                                City:
                        </span>{city}
                    </li>
                    <li className='list-group-item'>
                        <span className='badge badge-primary mr-2'>
                                Email:
                        </span>{email}
                    </li>
                    <li className='list-group-item'>
                        <span className='badge badge-primary mr-2'>
                                Mobile Number:
                        </span>{mobile}
                    </li>
                    <li className='list-group-item'>
                        <span className='badge badge-danger mr-2'>
                                User Area
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
    const {
        user:{first,last,school,address,city,email,mobile}
    } = isAuthenticated();
    return (
        <Base title="INFORMATION" 
        description="Pariksha-Information Task is Done."
        className='container bg-info p-4'
        >
            <div className='row'>
                <div className='col'>{AdminRightSide()}</div>
            </div>
        </Base>
    )
}

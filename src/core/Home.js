import React from 'react'
import Base from '../core/Base';
import {isAuthenticated} from '../auth/helper';
import {Link} from 'react-router-dom';

export default function Home() 
{
    return (
        <Base title="" 
        description=""
        className='container bg-info p-4'
        >
            <div className='row'>
                <div className='col'>
                  <p>Pariksha-Internshala</p>
                  <p>Applying For Inter At Possibillion Software Technologies Pvt. Ltd.</p>
                  <p>DataBase-MongoDB</p>
                  <p>Front-End Deployed in Netlify</p>
                  <p>Back-End Deployed in Heroku</p>
                  <p>Create Your Account or Login</p>
                  <p>Registration is Done ✅</p>
                  <p>Dashboard is Done ✅</p>
                  <p>Profile is Done ✅</p>
                  <p>Change Password has some functional Issues the code logic is Correct.I can Share if u Want</p>
                  <p>Logout is Done ✅</p>
                  <p>Login is Done ✅</p>
                </div>
            </div>
        </Base>
    )
}

import React, { Component } from 'react'
import Home from './Home';
import Contact from './Contact';
import NotFound from './NotFound';
import { Routes, Route } from 'react-router-dom';
import Profile from './profile/Profile';

export default class NavPages extends Component {
    render() {
        return (

            <div className='body'>
                <Routes>
                    <Route exact index element={<Home />} ></Route>
                    <Route exact path='/contact' element={<Contact />}></Route>

                    <Route exact path='/profile/:id' element={<Profile />}></Route>
                    <Route exact path='/profile' element={<Profile />}></Route>

                    <Route exact path='/*' element={<NotFound />}></Route>
                </Routes>
            </div>

        )
    }
}

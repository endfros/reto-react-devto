import React from 'react';
import { DefaultLayout } from "../layout/DefaultLayout";
import { Link } from "react-router-dom"
import "./registerPage.scss"

export const RegisterPage = () => {
    return(
        <DefaultLayout>
            <div className='container'>
                <div className='registerPage'>
                    <section className='registerPage__title'>
                        <h2>Welcome to DEV Community 👩‍💻👨‍💻</h2>
                        <p>DEV Community 👩‍💻👨‍💻 is a community of 945,825 amazing developers</p>
                    </section>
                    <form action="" className='registerPage__form'>
                        <span className='registerPage__form__label'>Email</span>
                        <input className='registerPage__form__input' type="text" />
                        <span className='registerPage__form__label'>Password</span>
                        <input className='registerPage__form__input' type="password" />
                        <button className='registerPage__form__continue'>Continue</button>
                    </form>
                    <section className='registerPage__login'>
                        <p>Have an account? You can just</p> 
                        <Link to="/login">LogIn</Link>
                    </section>
                </div>
            </div>
        </DefaultLayout>
    )
}
import React, {useState} from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { DefaultLayout } from "../layout/DefaultLayout";
import "./registerPage.scss"
const emailRegexPattern = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

export const LoginPage = (props) => {
    const [error, setError] = useState("");
    const [successfulLogin, setSuccessfulLogin] = useState(false);

    const form = {
          password: {
            inputName: "password",
            hasErrors: (value) => {
              const isEmpty = value === "";
      
              return isEmpty;
            },
          },
        email: {
          inputName: "email",
          hasErrors: (value) => {
            const isEmail = emailRegexPattern.test(value);
            // const isRepeated = users.some((user) => user.email === value);
            return !isEmail 
          },
        },
      };

    const login = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const email = formData.get(form.email.inputName)
        const password = formData.get(form.password.inputName)

        const emailHasErrors = form.email.hasErrors(email)
        const passwordHasErrors = form.password.hasErrors(password)

      
          if (emailHasErrors) {
            return setError("Email input not valid or repeated");
          }
      
          if (passwordHasErrors) {
            return setError("Password is empty");
          }

          fetch("http://localhost:8080/auth/login",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
              }),
          })
            .then((res) => res.json())
            .then((res) =>{
                console.log(res);
                if (res.success) {
                    console.log(res.token)
                    props.setToken(res.token)
                    setSuccessfulLogin(true);
                }
            });
    
          setError("");

    }
    // let navigate = useNavigate();
    // function handleClick() {
    //   navigate('/')
    // }

    if(successfulLogin){
        // let navigate = useNavigate();
        // navigate('/')
        return <Navigate to="/" />;
     }

    return (
        <DefaultLayout token={props.token} setToken={props.setToken}>
        <div className='container'>
            <div className='registerPage'>
                <section className='registerPage__title'>
                    <h2>Welcome to DEV Community 👩‍💻👨‍💻</h2>
                    <p>DEV Community 👩‍💻👨‍💻 is a community of 945,825 amazing developers</p>
                </section>
                <form action="" className='registerPage__form' onSubmit={login}>
                    <span className='registerPage__form__label'>Email</span>
                    <input 
                        className='registerPage__form__input' 
                        name={form.email.inputName}
                        type="text" 
                    />
                    <span className='registerPage__form__label'>Password</span>
                    <input 
                        className='registerPage__form__input' 
                        name={form.password.inputName}
                        type="password" 
                    />
                    <input className='registerPage__form__continue' type="Submit" value="Log In"/>
                </form>
                {/* <button onClick={handleClick}>prueba</button> */}
            </div>
        </div>
    </DefaultLayout>
    )
}
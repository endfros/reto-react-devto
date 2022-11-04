import React, {useState} from 'react';
import { DefaultLayout } from "../layout/DefaultLayout";
import { Link } from "react-router-dom"
import "./registerPage.scss"

const emailRegexPattern = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);


export const RegisterPage = (props) => {
    const [error, setError] = useState("");
    const [successfulRegister, setSuccessfulRegister] = useState(false);

    const form = {
        name: {
          inputName: "name",
          hasErrors: (value) => {
            const isEmpty = value === "";
    
            return isEmpty;
          },
        },
        username: {
            inputName: "username",
            hasErrors: (value) => {
              const isEmpty = value === "";
      
              return isEmpty;
            },
          },
          password: {
            inputName: "password",
            hasErrors: (value) => {
              const isEmpty = value === "";
      
              return isEmpty;
            },
          },
        nationality: {
            inputName: "nationality",
            hasErrors: (value) => {
              const isEmpty = value === "";
      
              return isEmpty;
            },
          },
        bio: {
            inputName: "bio",
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

    const addNewUser = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get(form.name.inputName)
        const email = formData.get(form.email.inputName)
        const password = formData.get(form.password.inputName)
        const username = formData.get(form.username.inputName)
        const bio = formData.get(form.bio.inputName)
        const nationality = formData.get(form.nationality.inputName)

        const nameHasErrors = form.name.hasErrors(name)
        const emailHasErrors = form.email.hasErrors(email)
        const passwordHasErrors = form.password.hasErrors(password)
        const usernameHasErrors = form.username.hasErrors(username)
        const bioHasErrors = form.bio.hasErrors(bio)
        const nationalityHasErrors = form.nationality.hasErrors(nationality)

        const img = "";
        let date = "";

        if (nameHasErrors) {
            return setError("Name is empty");
          }
      
          if (emailHasErrors) {
            return setError("Email input not valid or repeated");
          }
      
          if (passwordHasErrors) {
            return setError("Password is empty");
          }

          if (usernameHasErrors) {
            return setError("Username input not valid or repeated");
          }

          if (bioHasErrors) {
            return setError("Bio is empty");
          }

          if (nationalityHasErrors) {
            return setError("Nationality is empty");
          }
          const newUser = {
            name,
            username,
            img,
            email,
            password,
            date,
            bio,
            nationality,
          };

          console.log(JSON.stringify(newUser))
        //   "name": "Rodrigo Montoya",
        //   "username": "endfros",
        //   "img": "",
        //   "email": "monro490@gmail.com",
        //   "password": "endfros",
        //   "date": "",
        //   "bio": "Software Engineer at Netlify",
        //   "nationality": "Peruvian"

          fetch("http://localhost:8080/writer",{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                username,
                img,
                email,
                password,
                date,
                bio,
                nationality
              }),
          })
            .then((res) => res.json())
            .then((res) =>{
                console.log(res);
                if (res.registered) {
                    setSuccessfulRegister(true)
                }
            });
      
          setError("");

    }

    return(
        <DefaultLayout token={props.token} setToken={props.setToken}>
            <div className='container'>
                <div className='registerPage'>
                    <section className='registerPage__title'>
                        <h2>Welcome to DEV Community 👩‍💻👨‍💻</h2>
                        <p>DEV Community 👩‍💻👨‍💻 is a community of 945,825 amazing developers</p>
                    </section>
                    {successfulRegister && (
                        <article className="success-notification">
                        Successfully Registered!
                        </article>
                    )}
                    <form action="" className='registerPage__form' onSubmit={addNewUser}>
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
                        <span className='registerPage__form__label'>Name</span>
                        <input
                            className='registerPage__form__input'
                            name={form.name.inputName}
                            type="text" 
                        />
                        <span className='registerPage__form__label'>Username</span>
                        <input 
                            className='registerPage__form__input' 
                            name={form.username.inputName}
                            type="text" 
                        />
                        <span className='registerPage__form__label'>Nationality</span>
                        <input 
                            className='registerPage__form__input' 
                            name={form.nationality.inputName}
                            type="text" 
                        />
                        <span className='registerPage__form__label'>Bio</span>
                        <input 
                            className='registerPage__form__input' 
                            name={form.bio.inputName}
                            type="text" 
                        />
                        <input className='registerPage__form__continue' type="Submit" value="Register"/>
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
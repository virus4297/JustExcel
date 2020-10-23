import React, { useState } from 'react';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


function Login(props) {

    const [Error, setError] = useState('');
    

    const initialValues = {
        Loginemail: "",
        Loginpassword: ""
    }

    const onSubmit = LoginData => {
        axios.post('/user/login', LoginData)
            .then(res => {
                if (res.data === 'Invalid Password' || res.data === 'User not Found')
                    setError(res.data);
                else
                {
                    sessionStorage.setItem('ltk',JSON.stringify(res.data));
                    props.history.push('/dashboard');
                }
            })
            .catch(err => { console.log(err) })
    }

    const validationSchema = yup.object({
        email: yup.string().email('Invalid Email Address').required('Required'),
        password: yup.string().required('Required')
    })

    return (
            <div>
                <p id="Heading">Excel Commerce Classes</p>
                <p id="Label">Log in</p>
                <div id='container'>
                    <Formik
                        id='formikform'
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >

                        <Form id="loginform">
                            {
                                Error &&
                                <div>
                                    <strong style={{ color: 'red', marginLeft: '12px' }}>{Error}</strong>
                                </div>
                            }
                            <div>
                                <label htmlFor="email">Email</label>
                                <br />
                                <FastField type='email' id='Loginemail' name='email' placeholder="Email Address" />
                                <p id="loginError">
                                    <ErrorMessage name='email' />
                                </p>
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <br />
                                <FastField type='password' id='Loginpassword' name='password' placeholder="Password" />
                                <p id="loginError">
                                    <ErrorMessage name='password' />
                                </p>
                            </div>
                            <Button id="signupbtn" type='submit'>Submit</Button>

                        </Form>
                    </Formik>
                </div>
                <Link id="singuplink" to="/signup"> Don't have an account? Sign up </Link>
            </div>
    );
}

export default Login;
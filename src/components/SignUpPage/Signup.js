import React,{useState} from 'react';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Signup(props) {

    
    const [SignUp,setSignUp] = useState(false);

    const initialValues = {
        SignUpname: '',
        SignUpemail: '',
        SignUppassword: ''
    }
    

    const onSubmit = signUpData => {
        axios.post('/user/signup', signUpData)
            .then(res => {
                if (res.data === true) {
                    props.history.push('/login')
                }
                else {
                    setSignUp(true);
                    setTimeout(() => {
                        setSignUp(false);
                      }, 3500);
                }
            })
            .catch(err => { console.log(err) })
    }

    const validationSchema = yup.object({
        name: yup.string().required('Required'),
        email: yup.string().email('Invalid Email Address').required('Required'),
        password: yup.string().required('Required')
    })

    return (
        <div>
            <p id="Heading">Excel Commerce Classes</p>
            <p id="Label">Sign up</p>

            <div id="container">
                <Formik
                    id='Formikform'
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form id="signupform">
                        {
                            SignUp &&
                            <div>
                                    <strong style={{color:'red',marginLeft:'12px'}}>User Already Exist</strong>
                            </div>
                        }
                        <div>
                            <label htmlFor="name">Full Name</label>
                            <br />
                            <FastField type='text' id='name' name='name' placeholder="Enter your Name" />
                            <p id="signupError">
                                <ErrorMessage name='name' />
                            </p>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <br />
                            <FastField type='email' id='email' name='email' placeholder="Email Address" />
                            <p id="signupError">
                                <ErrorMessage name='email' />
                            </p>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <br />
                            <FastField type='password' id='password' name='password' placeholder="Password" />
                            <p id="signupError">
                                <ErrorMessage name='password' />
                            </p>
                        </div>
                        <Button id="signupbtn" type='submit'>Submit</Button>
                    </Form>
                </Formik>
            </div>
            <Link id="loginlink" to="/login">Already have an account? Log in </Link>
        </div>
    );
}

export default Signup;
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import classes from '../styles/Login.module.css';

const Login = () => (
    <section className={classes.loginSection}>
        <div className="container">
            <div className={classes.loginBox}>
                <h2 className={classes.loginHeading}>Login</h2>
                <form className={classes.loginForm}>
                    <input type="email" className={classes.loginInput} placeholder="Email" />
                    <input type="password" className={classes.loginInput} placeholder="Password" />
                    <br />
                    <Button fullWidth theme="primary">
                        LOGIN
                    </Button>
                </form>
                <div className={classes.endBox}>
                    <Link to="/forgot-password" className={classes.link}>
                        Forgot Password?
                    </Link>
                    <p className={classes.or}>Or</p>
                    <Link to="/signup" className={`${classes.link} text-gray-800`}>
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

export default Login;

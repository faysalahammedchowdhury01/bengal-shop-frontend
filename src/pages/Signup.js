import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import classes from '../styles/Signup.module.css';

const Signup = () => (
    <section className={classes.signupSection}>
        <div className="container">
            <div className={classes.signupBox}>
                <h2 className={classes.signupHeading}>signup</h2>
                <form className={classes.signupForm}>
                    <input type="email" className={classes.signupInput} placeholder="Email" />
                    <input type="password" className={classes.signupInput} placeholder="Password" />
                    <input
                        type="password"
                        className={classes.signupInput}
                        placeholder="Confirm Password"
                    />
                    <br />
                    <Button fullWidth theme="primary">
                        SINGUP
                    </Button>
                </form>
                <div className={classes.endBox}>
                    <p className={classes.or}>Or</p>
                    <Link to="/login" className={`${classes.link} text-gray-800`}>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

export default Signup;

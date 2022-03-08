import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import classes from '../styles/Account.module.css';

const Account = () => {
    const haveImg = true;

    return (
        <>
            <Link to="dashboard" className={classes.accountBtn}>
                <span className={classes.accountAvatar}>
                    {haveImg ? (
                        <img
                            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t1.6435-1/123655240_203644054466077_7927411137761104682_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeEcJeYOZ1PPXsUIxearoFeO2PCC-oWzgOzY8IL6hbOA7LBUBXkWtxV76gViQLWi2kgenbcMbUJ7d-eTM8WKvZy6&_nc_ohc=c7npkHWWuiUAX9RNIk7&_nc_ht=scontent.fdac135-1.fna&oh=00_AT_i05c5wSQt-Sq_p5PJrSwSlnhUyPpq1U0rOGi96QBu4g&oe=62437EB1"
                            alt=""
                        />
                    ) : (
                        <AiOutlineUser fontSize="22px" />
                    )}
                </span>
                <span className={classes.accountBtnText}>Faysal</span>
            </Link>
        </>
    );
};

export default Account;

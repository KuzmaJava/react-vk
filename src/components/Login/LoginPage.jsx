import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControl/FormControl";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import styles from "./../common/FormControl/FormControl.module.css";

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", Input, [required])}
            {createField("Password", "password", Input, [required], {type: "password"})}
            {createField(null, "rememberMe", Input, [], {type: "checkbox"}, "rememberMe")}

            {error && <div className={styles.formSummaryError}>
                {error}
            </div>
            }
                <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login}) (LoginPage);
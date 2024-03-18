import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../redux/profile-reducer";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to={"/login"}/>;
            }
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect, {getUserProfile})(RedirectComponent);
}
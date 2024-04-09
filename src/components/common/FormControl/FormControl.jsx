import styles from "./FormControl.module.css";
import {Field} from "redux-form";
import React from "react";

const FormControl = ({input, meta: {touched, error}, children, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
};

export const Textarea = (props) => {
    return <FormControl {...props}><textarea {...props.input} {...props} /></FormControl>;
};

export const Input = (props) => {
    return <FormControl {...props}><input {...props.input} {...props} /></FormControl>;
};

// in the current function 'props' allows us to pass additional params to this function
export const createField = (placeholder, name, component, validators, props = {}, text = "") => {
    return (
        <div>
            <Field placeholder={placeholder}
                   name={name}
                   component={component}
                   validate={validators}
                   {...props}
            /> {text}
        </div>
    )
}
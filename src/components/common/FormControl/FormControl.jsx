import styles from "./FormControl.module.css";

const FormControl = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error;
    console.log(meta);
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea = (props) => {
    return <FormControl {...props}><textarea {...props.input} {...props} /></FormControl>;
};

export const Input = (props) => {
    return <FormControl {...props}><input {...props.input} {...props} /></FormControl>;
};

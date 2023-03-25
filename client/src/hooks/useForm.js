import { useState } from "react";

export default function useForm(initialValues, onSubmitHandler) {
        const [formValues, setFormValues] = useState(initialValues);

        const onChangeHandler = (e) => {
            setFormValues(state => ({...state, [e.target.name]: e.target.value}));
    
        }

        const onChangeAllValues= (values) => {
            setFormValues(state => ({...state, ...values}));
        }

        const onSubmit = (e) => {
            e.preventDefault();

            if(onSubmitHandler) {
                onSubmitHandler(formValues)
            }
        };

        return{
            formValues,
            onChangeHandler,
            onChangeAllValues,
            onSubmit
        }
    
}
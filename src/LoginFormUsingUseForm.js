import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
const LoginForm = () => {

    const schema = yup.object().shape({
        username: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "Password does not match").required(),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        // Process the form data here (e.g., submit to server)
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text" placeholder="Username" {...register('username')} />
                <p>{errors.username?.message}</p>
            </div>
            <div>
                <input type="email" placeholder="Email" {...register('email')} />
            </div>
            <div>
                <input type="password" placeholder="Password" {...register('password')} />
            </div>
            <div>
                <input type="password" placeholder="Confirm Password" {...register('confirmPassword')} />
                <p>{errors.confirmPassword?.message}</p>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginForm;

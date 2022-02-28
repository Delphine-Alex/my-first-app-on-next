import React, { useState } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import TitlePage from '../../components/TitlePage';

const Index = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className='form'>
            <TitlePage title="Login" />
            <form onSubmit={handleSubmit}>
                <Input type="text" title="Enter your email" id="firstName" label="firstName" required={true} value={email} onChange={handleChangeEmail} />
                <Input type="text" title="Enter your password" value={password} onChange={handleChangePassword} />
                <Button type="submit" title="Submit" classes="btn btn__color-black" />
            </form >
        </div>
    );
}

export default Index;

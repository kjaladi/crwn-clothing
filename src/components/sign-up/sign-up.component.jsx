import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password's dont match, please enter and confirm your Password again");
            return;
        }
        const { user } = await auth.createUserWithEmailAndPassword(email, password);

        try {
            await createUserProfileDocument(user, { displayName });
            this.setState({

                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.log(error);
            alert("Something went wrong by Sign-up, Try again !")
        }


    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className="sign-up">
                <h2 className="title">I don't have an Account</h2>
                <span>Sign up with your E-mail and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput required name="displayName" type="text" value={displayName} handleChange={this.handleChange} label="Display name" />
                    <FormInput required name="email" type="email" value={email} handleChange={this.handleChange} label="Email" />
                    <FormInput required name="password" type="password" value={password} handleChange={this.handleChange} label="Password" />
                    <FormInput required name="confirmPassword" type="password" value={confirmPassword} handleChange={this.handleChange} label="Confirm password" />
                    <CustomButton type="submit" name="signup" isGoogleSignIn={false} > sign up</CustomButton>
                </form>

            </div>

        );
    }
}

export default SignUp;
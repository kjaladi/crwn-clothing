import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';
import './sign-in.styles.scss';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    }


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an Account</h2>
                <span>Sign in with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput required name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="Email" />
                    <FormInput required name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="Password" />
                    <CustomButton type="submit"> sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle}> sign in with google
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
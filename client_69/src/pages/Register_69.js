import { useState, useEffect } from "react"
import Wrapper from "../assets/wrappers/Register_69";
import { Logo_69, FormRow_69 } from "../components";
import { useAppContext_69 } from "../context/appContext_69";
import Alert_69 from "../components/Alert_69";
const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false
}

const Register_69 = () => {
    const [values, setValues] = useState(initialState);

    const { showAlert, displayAlert, registerUser, loginUser } = useAppContext_69()

    const toggleMember = () => {
        setValues(
            {
                ...values,
                isMember: !values.isMember
            });
    }

    const handleChange = (e) => {
        // console.log('e.target', e.target);
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember } = values;
        //console.log('e.target', e.target);
        if (!email || !password || isMember && name) {
            displayAlert();
            return;
        }
        const currentUser = { name, email, password };
        console.log('form data', currentUser);
        if (!isMember) {
            registerUser({
                currentUser,
                endPoint: 'register_69',
                alertText: 'User created Redirecting ...',
            })
        } else {
            loginUser({
                currentUser,
                endPoint: 'login_69',
                alertText: 'Login Successful Redirecting ...',
            })
        }
    }
    return (
        <Wrapper>
            <form className="form" onSubmit={onSubmit}>
                <Logo_69 />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {showAlert && <Alert_69 />}
                {/* name input */}
                {!values.isMember && (
                    <FormRow_69
                        type='text'
                        name='name'
                        value={values.name}
                        handleChange={handleChange}
                    />
                )}
                {/* email input */}
                <FormRow_69
                    type='email'
                    name='email'
                    value={values.email}
                    handleChange={handleChange}
                />
                {/* password input */}
                <FormRow_69
                    type='password'
                    name='password'
                    value={values.password}
                    handleChange={handleChange}
                />
                {/* <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        name
                    </label>
                    <input type="text"
                        value={values.name}
                        name='name'
                        className='form-input'
                        onChange={handleChange} />
                </div> */}

                <button className="btn btn-block" type="submit">Submit</button>
                <p>
                    {values.isMember ? 'Not a member yet ?' : 'Aleready a member'}
                    <button type="button" className="member-btn" onClick={toggleMember}>
                        {values.isMember ? 'Regisret' : 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register_69
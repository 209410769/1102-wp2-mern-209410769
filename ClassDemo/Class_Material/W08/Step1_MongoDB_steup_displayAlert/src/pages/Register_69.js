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

    const { showAlert, displayAlert } = useAppContext_69()

    const handleChange = (e) => {
        console.log('e.target', e.target);
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //console.log('e.target', e.target);
        const { email, password } = values;
        if (!email || !password) {
            displayAlert();
            return;
        }
    }
    return (
        <Wrapper>
            <form className="form" onSubmit={onSubmit}>
                <Logo_69 />
                <h3>Register</h3>
                {showAlert && <Alert_69 />}
                {/* name input */}
                <FormRow_69
                    type='text'
                    name='name'
                    value={values.name}
                    handleChange={handleChange}
                />
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
            </form>
        </Wrapper>
    )
}

export default Register_69
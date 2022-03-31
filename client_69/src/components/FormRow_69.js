const FormRow_69 = ({ type, name, vlaue, handleChange, labelText }) => {
    return (
        <div>
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>
            <input type={type}
                value={vlaue}
                name={name}
                className='form-input'
                onChange={handleChange} />
        </div>
    )
}

export default FormRow_69
const Password = ({ label, isValid, handleChange, value }) => (
    <div>
    <label>
        { label }
    </label>
    <input
        type="password"
        onChange={ handleChange }
        style={ isValid ? {} : { borderColor: "red" }}
        value={ value }
        />
</div>
);

export default Password;
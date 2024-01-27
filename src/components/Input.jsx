
const Input = ({ retriveData, inputValue }) => {

    function handleChange(e) {
        retriveData(e.target.value);
    }
    return (
        <input type="text" value={inputValue} onChange={handleChange} />
    )
}

export default Input;
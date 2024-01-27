// Form.jsx
import Input from "./Input";

const Form = ({ retrieveData, inputItem, handleAddItem }) => {
  function getInputItem(value) {
    retrieveData(value);
  }

  function handleClick() {
    handleAddItem();
  }

  return (
    <div className="form">
      <Input retriveData={getInputItem} inputValue={inputItem} />
      <button onClick={handleClick}>
        <span>Add</span>
      </button>
    </div>
  );
};

export default Form;

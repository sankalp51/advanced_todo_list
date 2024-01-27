// App.jsx
import React from "react";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const [list, setList] = React.useState([]);
  const [listItem, setListItem] = React.useState('');
  const [validity, setValidity] = React.useState(true);

  function populateList() {
    if (listItem.trim() === '') {
      setValidity(prevState => !prevState);
    }
    else {
      setList(prevState => {
        return [...prevState, listItem];
      });
      // Clear the input field after adding the item
      setListItem('');
    }

  }

  function getListItem(value) {
    if (value !== '') {
      setValidity(true);
    }
    setListItem(value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Form retrieveData={getListItem} inputItem={listItem} handleAddItem={populateList} />
      <div>
        <List list={list} validity={validity} />
      </div>
    </div>
  );
}

export default App;

import React from "react";
const List = ({ list, validity }) => {
    const content = <ul>
        {list.map((item, index) => {
            return <li key={index}>{item}</li>;
        })}
    </ul>
    return !validity ? <p style={{ color: 'red' }}>Cannot add empty item</p> : content
}

export default List;
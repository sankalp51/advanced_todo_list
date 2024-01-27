import React from "react";
const List = ({ list, validity, onChecked }) => {



    const content = <ul>
        {list.map((item, index) => {
            return (
                <li
                    key={index}
                    onClick={() => onChecked(index)}>
                    {item}

                </li>);
        })}
    </ul>
    return !validity ? <p style={{ color: 'red' }}>Cannot add empty item</p> : content
}

export default List;
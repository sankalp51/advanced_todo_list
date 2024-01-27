import React from "react";
const List = ({ list, validity }) => {
    const [crossStyle, setCrossStyle] = React.useState(false);

    function handleClick() {
        setCrossStyle(prevState => !prevState);
    }

    const content = <ul>
        {list.map((item, index) => {
            return (
                <li
                    key={index}
                    onClick={handleClick}
                    style={{ textDecoration: crossStyle ? 'line-through' : null }}>
                    {item}
                </li>);
        })}
    </ul>
    return !validity ? <p style={{ color: 'red' }}>Cannot add empty item</p> : content
}

export default List;
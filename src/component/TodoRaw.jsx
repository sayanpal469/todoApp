import React from 'react';

const TodoRaw = ({ data }) => {
    const { id, todo, completed, userId } = data
    return (
        <tr>
            <th>{id}</th>
            <td>{todo}</td>
            <td>{completed == true ? 'Completed' : 'Not Complete'}</td>
            <td>{userId}</td>
        </tr>
    );
};

export default TodoRaw;
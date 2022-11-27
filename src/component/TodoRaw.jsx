// import { parse } from 'postcss';
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

const TodoRaw = ({ data, todoData, setTododata }) => {
    const { id, todo, completed, userId } = data

    const handelDelete = (taskId) => {
        const newData = [...todoData]
        fetch(`https://dummyjson.com/todos/${taskId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if(data.isDeleted == true) {
                    const deletedData = todoData.findIndex(data => data.id == taskId)
                    // setTododata(delete todoData[deletedData])
                    newData.splice(deletedData,1)
                    setTododata(newData)
                }
            })
        console.log(taskId)
    }
    return (
        <tr>
            <th>{id}</th>
            <td>{todo}</td>
            <td>{completed == true ? 'Completed' : 'Not Complete'}</td>
            <td>{userId}</td>
            <td className='flex'>
                <FiEdit className='text-2xl mr-4'></FiEdit>
                <AiOutlineDelete onClick={() => handelDelete(id)} className='text-2xl text-red-500'></AiOutlineDelete>
            </td>
        </tr>
    );
};

export default TodoRaw;
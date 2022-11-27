// import { parse } from 'postcss';
import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

const TodoRaw = ({ data, todoData, setTododata }) => {
    const [showInput, setShowInput] = useState(false)
    const { id, todo, completed, userId } = data




    const handelEditStatus = () => {
        fetch('https://dummyjson.com/todos/', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                completed: false,
            })
        })
    }

    const handelDelete = (taskId) => {
        const newData = [...todoData]
        fetch(`https://dummyjson.com/todos/${taskId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.isDeleted == true) {
                    const deletedData = todoData.findIndex(data => data.id == taskId)
                    // setTododata(delete todoData[deletedData])
                    newData.splice(deletedData, 1)
                    setTododata(newData)
                }
            })
        // console.log(taskId)
    }
    return (
        <tr>
            <th>{id}</th>
            <td>{todo}</td>
         { showInput ?  <td> 
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">True</span>
                    <input value={true} type="radio" name="radioStatus" className="radio checked:bg-blue-500" checked />
                </label>
           
                <label className="label cursor-pointer">
                    <span className="label-text">False</span>
                    <input value={false} type="radio" name="radioStatus" className="radio checked:bg-red-500" checked />
                </label>
            </div></td>
           :  <td className='flex'>
                {completed == true || completed == 'true' ? <>
               
                </> : 'Not Complete'}
                <FiEdit className='text-2xl ml-4'></FiEdit>
            </td>}
            <td>{userId}</td>
            <td>
                <AiOutlineDelete onClick={() => handelDelete(id)} className='text-2xl text-red-500'></AiOutlineDelete>
            </td>
        </tr>
    );
};

export default TodoRaw;
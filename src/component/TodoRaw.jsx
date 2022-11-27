// import { parse } from 'postcss';
import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';

const TodoRaw = ({ data, todoData, setTododata }) => {
    const [showInput, setShowInput] = useState(false)
    const [updatedStatus, setUpdatedStatus] = useState({})
    const [updateData, setUpdateData] = useState(false)
    const { id, todo, completed, userId } = data
    const [completeStatus, setCompleteStatus] = useState(completed)


    const getValue = (e) => {
        let value = e.target.value;
        // console.log(value);
        setUpdatedStatus(value)
    }


    const handelUpdateBTN = async (upId) => {
        setUpdateData(false)
        setShowInput(false)
        
        setCompleteStatus(updatedStatus)
        

        await fetch(`https://dummyjson.com/todos/${upId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                completed: updatedStatus,
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    const handelEditStatus = () => {
        setShowInput(true)
        setUpdateData(true)
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
            <td className='flex'>
                {showInput == true ?


                    <>

                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">True</span>
                                <input onChange={getValue} value={true} type="radio" name="radioStatus" className="radio checked:bg-blue-500" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">False</span>
                                <input onChange={getValue} value={false} type="radio" name="radioStatus" className="radio checked:bg-red-500" />
                            </label>
                        </div>


                    </>



                    :
                    completeStatus == true || completed == 'true' ? 'Completed' : 'Not Complete'}

                {
                    updateData == true ? <TiTick onClick={() => handelUpdateBTN(id)} className='text-4xl ml-4'></TiTick> : <FiEdit onClick={handelEditStatus} className='text-2xl ml-4'></FiEdit>
                }
            </td>
            <td>{userId}</td>
            <td>
                <AiOutlineDelete onClick={() => handelDelete(id)} className='text-2xl text-red-500'></AiOutlineDelete>
            </td>
        </tr>
    );
};

export default TodoRaw;
import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoRaw from './TodoRaw';

const Home = () => {

    const [todoData, setTododata] = useState([])

    useEffect(() => {
        const url = `https://dummyjson.com/todos/?limit=5`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTododata(data.todos)
                // console.log(data)
                todoData.pop()
            },
            )

    }, [])


    // console.log(todoData.length)
    return (
        <div className='px-14'>
            <AddTodo todoData={todoData} setTododata={setTododata} />
            <div className="overflow-x-auto">
                <table className="table w-full ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Todo</th>
                            <th>Status</th>
                            <th>User Id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todoData?.map(data => <TodoRaw key={data.id} data={data} todoData={todoData} setTododata={setTododata} ></TodoRaw>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
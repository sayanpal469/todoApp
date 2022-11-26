import React, { useState, useEffect } from 'react';
import TodoRaw from './TodoRaw';

const Home = () => {

    const [todoData, setTododata] = useState([])

    useEffect(() => {
        const url = `https://dummyjson.com/todos`
        fetch(url)
        .then(res => res.json())
        .then(data => setTododata(data.todos))
    },[])


    return (
        <div className='px-14'>
            <div className="overflow-x-auto">
                <table className="table w-full ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Todo</th>
                            <th>Status</th>
                            <th>User Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todoData.map(data => <TodoRaw key={data.id} data={data}></TodoRaw>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
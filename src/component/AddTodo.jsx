import { parse } from "postcss";

const AddTodo = ({ todoData, setTododata }) => {


    const addTodo = (e) => {
        e.preventDefault()
        const todo = e.target.task.value;
        const completed = e.target.radioStatus.value;
        const userId = e.target.userId.value;
        console.log(completed);

        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo: todo,
                completed: completed,
                userId: userId
            })
        })
            .then(res => res.json())
            .then(data => setTododata([...todoData, { ...data, id: todoData.length + 1 }]))
    }

    return (
        <div className='mb-3'>
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn btn-primary">Add Task</label>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={addTodo} className="m-auto w-full max-w-sm">
                        <div className="form-control">
                            <input required name='task' type="text" placeholder="Task" className="input input-bordered" />
                        </div>


                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">True</span>
                                <input value={true} type="radio" name="radioStatus" className="radio checked:bg-blue-500" checked />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">False</span>
                                <input value={false} type="radio" name="radioStatus" className="radio checked:bg-red-500" checked />
                            </label>
                        </div>



                        <div className="form-control">
                            <input required name='userId' type="text" placeholder="Your id" className="input input-bordered" />
                        </div>

                        <div className="mt-5 text-center">
                            <label >
                                <input htmlFor="my-modal-6" type='submit' value='Add' className='btn' />
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTodo;
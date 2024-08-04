const AddForm = ({ todo, setTodo, add }) => {
  return (
    <form onSubmit={add}>
      <input
        type="text"
        value={todo.name ? todo.name : ''}
        onChange={(e) => setTodo({name:e.target.value})}
        placeholder="Add Todo"
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;

const EditForm = ({ todo, setTodo, update }) => {
  return (
    <form onSubmit={update}>
      <h4>Edit form</h4>
      <input
        type="text"
        value={todo.name}
        onChange={(e) => setTodo({name:e.target.value})}
        placeholder="Edit Todo"
      ></input>
      <button type="submit">Update</button>
    </form>
  );
};

export default EditForm;

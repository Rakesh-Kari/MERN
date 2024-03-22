export function CreateTodo() {
  return (
    <div>
      <input
        style={{
          paddinig: "10px",
          margin: "10px",
        }}
        type="text"
        placeholder="title"
      ></input>
      <br></br>
      <input
        style={{
          paddinig: "10px",
          margin: "10px",
        }}
        type="text"
        placeholder="description"
      ></input>
      <br></br>
      <button
        style={{
          paddinig: "10px",
          margin: "10px",
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

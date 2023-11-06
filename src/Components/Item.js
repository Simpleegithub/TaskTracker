export  function Item({ item, handledeleteitems, handleunpaking }) {
  // const[checked,setchecked]=useState(false);
  return (
    <li>
      <input type="checkbox" onChange={() => handleunpaking(item.id)} />
      <span
        style={
          item.packed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handledeleteitems(item.id)}>❌</button>
    </li>
  );
}

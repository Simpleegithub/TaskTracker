import { useState } from "react";
import { Item } from "./Item.js";

export function PackingList({
  items,
  setitems,
  handledeleteitems,
  handleunpaking,
}) {
  const [sortby, setsortby] = useState("input");
  let sorteditems;

  if (sortby === "input") sorteditems = items;
  if (sortby === "description")
    sorteditems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed")
    sorteditems = items.slice().sort((a, b) => a.packed - b.packed);

  function clearlist() {
    if (items.length > 0) {
      let a = window.confirm("Are you sure you want to clear the list ? ");
      if (a) {
        setitems([]);
      }
    }
  }

  return (
    <div className="list">
      <ul>
        {sorteditems.map((item) => (
          <Item
            item={item}
            key={item.id}
            handledeleteitems={handledeleteitems}
            handleunpaking={handleunpaking}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          name=""
          id=""
          value={sortby}
          onChange={(e) => setsortby(e.target.value)}
        >
          <option value="input">Sort by input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearlist}>Clear List</button>
      </div>
    </div>
  );
}

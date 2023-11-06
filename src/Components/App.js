import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import { PackingList } from "./PackingList.js";
import { Stats } from "./Stats.js";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 2, packed: false },
];

export default function App() {
  const [items, setitems] = useState(initialItems);

  function handledeleteitems(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }

  function handleunpaking(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div>
      <Logo />
      <Form items={items} setitems={setitems} />
      <PackingList
        items={items}
        setitems={setitems}
        handledeleteitems={handledeleteitems}
        handleunpaking={handleunpaking}
      />
      <Stats items={items} />
    </div>
  );
}

import { useState } from "react";

export default function Todo() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(["Coding", "Reading", "Traveling" ]);

  function handleAddItem() {
    if (item.trim() === "") return;
    setItems([...items, item]);
    setItem("");
  }

  function handleDeleteItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Elements are Shown below</h2>

      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      
      <button className="addBtn"   onClick={handleAddItem}>Add </button>

      <ol>
        {items.map((Todo, i) => (
          <li key={i}>
            {Todo  }
            <button className="deleteBtn" onClick={() => handleDeleteItem(i)}>Delete </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

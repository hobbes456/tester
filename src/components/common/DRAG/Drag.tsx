import { useState } from "react";

const initialItems = ["Первый элемент", "Второй элемент", "Третий элемент"];

const Drag = () => {
    const [items, setItems] = useState(initialItems);

    const onDragStart = (event, index) => {
        event.dataTransfer.setData("text/plain", index);
    };

    const onDrop = (event, index) => {
        const draggedIndex = event.dataTransfer.getData("text/plain");

        const newItems = [...items];

        const [removed] = newItems.splice(draggedIndex, 1);

        newItems.splice(index, 0, removed);

        setItems(newItems);

        
    };

    const onDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <h1>Drag and Drop Список</h1>

            <ul>
                {items.map((item, index) => (
                    <li
                        key={index}
                        draggable
                        onDragStart={(event) => onDragStart(event, index)}
                        onDrop={(event) => onDrop(event, index)}
                        onDragOver={onDragOver}
                        style={{
                            userSelect: "none",

                            padding: "16px",

                            margin: "0 0 8px 0",

                            backgroundColor: "#fff",

                            border: "1px solid #ccc",

                            borderRadius: "4px",
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Drag;

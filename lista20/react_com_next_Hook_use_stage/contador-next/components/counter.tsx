"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Contador = {count}</h2>
            <button onClick={() => setCount(count + 1)}
                style={{
                    backgroundColor: "#deb887",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "1rem",
                }}>Incrementar</button>
        </div>
        
    );
}
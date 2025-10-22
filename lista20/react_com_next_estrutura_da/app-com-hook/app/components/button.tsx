"use client";

export default function Button() {
    const handleClick = () => {
        alert("Botão clicado!")
    };

    return (
        <button
            onClick={handleClick}
            style={{
                backgroundColor: "#deb887",
                color: "#fff",
                padding: "10px 20px",
                marginTop: "50px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",

            }}
        >Clique Aqui</button>
    );
}
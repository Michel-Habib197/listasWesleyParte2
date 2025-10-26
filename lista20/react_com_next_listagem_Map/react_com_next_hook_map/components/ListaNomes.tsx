"use client";

type NomeListaProps = {
    nomes: string[];
};

export default function ListaNomes({ nomes }: NomeListaProps) {
    return (
        <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
            {nomes.map((nome, index) => (
                <li
                    key={index}
                    style={{
                        margin: "6px 0",
                        padding: "8px 12px",
                        backgroundColor: "beige",
                        borderRadius: "8px",
                        display: "inline-block",
                        minWidth: "150px",
                    }}
                >
                    {nome}
                </li>
            ))}
        </ul>
    );
}
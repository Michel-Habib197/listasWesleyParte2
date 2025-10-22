import Counter from "@/components/counter";

export default function HomePage(){
  return(
    <main style={{textAlign: "center", marginTop: "50px"}}>
      <h1>Exemplo de useState</h1>
      <p>Clique no botão para incrementar o contador:</p>
      <Counter/>
    </main>
  );
}
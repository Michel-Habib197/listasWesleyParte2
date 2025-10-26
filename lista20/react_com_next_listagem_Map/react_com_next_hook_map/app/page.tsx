import ListaNomes from "@/components/ListaNomes";

export default function HomePage(){
  const pessoas =["Ana", "Claudio", "Michel", "Lara", "Laura", "Julia", "Alex"]

  return(
    <main style={{textAlign: "center", marginTop: "40px"}}>
      <h1>Exemplo do método .map() no Next.js</h1>
      <p>Nomes:</p>
      <ListaNomes nomes={pessoas}/>
    </main>
  );
}

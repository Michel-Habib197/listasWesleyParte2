// Faz uma requisição GET para a API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) // converte a resposta em JSON
    .then(posts => {
        const lista = document.getElementById('lista-posts'); // pega a <ul>

        // percorre cada post e cria um <li> com o título
        posts.forEach(post => {
            const item = document.createElement('li');
            item.textContent = post.title;
            lista.appendChild(item);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar os posts:', error);
    });
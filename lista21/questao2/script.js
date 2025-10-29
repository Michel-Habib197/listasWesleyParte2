//Fazer requisiçao get paraa buscar post com id = 1
fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json())
.then(post => {
    //Exibir o título
    document.getElementById('post-title').textContent = post.title;
    
    //Exibir o corpo do post que vai estilizado em CSS
    document.getElementById('post-body').textContent = post.body;
});
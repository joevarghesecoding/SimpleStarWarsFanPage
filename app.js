// What Helped me:
// Creating elements and adding classes in DOM : https://bobbyhadz.com/blog/javascript-create-element-with-text
// Targeting parent for eventlisteners : https://davidwalsh.name/event-delegate


document.addEventListener('DOMContentLoaded', function() {
    const crawl = document.querySelector('.crawl');
    const images = document.querySelector('.images');
    let movie;

    const button = document.querySelector('button');
    const parent = document.querySelector('.parent');

    button.style.display = 'none';
    parent.style.display = 'none';

    images.addEventListener('click', async function(e) {
        movie = e.target.alt;
        
        const response = await axios.get(`https://swapi.dev/api/films/${movie}`);

        document.getElementById('choose').style.display = 'none';
        document.querySelector('.images').style.display = 'none';
        
        button.style.display = 'block';
        parent.style.display = 'block';
        const h1_title = document.createElement('H1');
        const para = document.createElement('P');

    
        para.classList.add('crawl-text');
        h1_title.classList.add('crawl-text');
        h1_title.setAttribute('text-align', 'center');
        h1_title.textContent = response.data.title;
        para.textContent = response.data.opening_crawl;

        crawl.appendChild(h1_title);
        crawl.appendChild(para);

        button.addEventListener('click', () => {
            document.querySelector('#choose').style.display = 'block';
            document.querySelector('.images').style.display = 'block';
            button.style.display = 'none';
            parent.style.display = 'none';
            location.reload();
        })
    })
    
    
})
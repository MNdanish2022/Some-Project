console.log('Index JS');

let fetchDiv = document.getElementById('fetchDiv');


// News Api Get
apiKey = '7a513e2fac2c40e7b6d6de1980e0578b';
sourceNews = 'cnn'
// sourceNews = 'al-jazeera-english'

// Create an Fetch Api Request
let news;
async function fetchNews() {
    const jsonData = await fetch(`https://newsapi.org/v2/top-headlines?sources=${sourceNews}&apiKey=${apiKey}`);
    news = await jsonData.json();
    news = news.articles;
    console.log('News Articles', news);

    

    let newshtml = '';
    await news.forEach((element) => {
        // console.log(element)
        let fnews = `   <div class="card mx-3 my-3" style="width:24rem; height:auto;">
                         <img src="${element.urlToImage}" id='cardImg' class="card-img-top my-3" alt="...">
                             <div class="card-body">
                                 <h5 class="card-title">${element.title}</h5>
                                    <p class="card-text">${element.description}</p>
                                    <a href="${element.url}" target='_blank' class="btn btn-primary">Read More</a>
                                 </div>
                     </div>`


        newshtml += fnews;
    });
    fetchDiv.innerHTML = newshtml


}

fetchNews();

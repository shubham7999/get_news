console.log("Running");


let news = document.getElementById('news');

var url = "https://gnews.io/api/v4/top-headlines?token=1c7318f6429f60d8054f2a1336e7afe2&country=in&lang=en";


// creating a ajax get request
const xhr = new XMLHttpRequest();


//Making a get request
xhr.open("GET", url, true);


// What to do when loading
xhr.onload = function () {
  if (this.status === 200) {

    let obj = JSON.parse(this.responseText);
    var articles = obj.articles;
    let html = "";

    for (let i = 0; i < articles.length; i++) {
      let newscontent = `
        <div class="accordion-item">
        <h2 class="accordion-header" id="heading${i+1}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i+1}" aria-expanded="true" aria-controls="collapse${i+1}">
           <b> Breaking News ${i+1} : </b> ${articles[i].title} by -- <a href= "${articles[i].source.url}" target="_blank" > ${articles[i].source.name} </a>
          </button>
        </h2>
        <div id="collapse${i+1}" class="accordion-collapse collapse show" aria-labelledby="heading${i+1}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
           ${articles[i].content}

           <a href="${articles[i].url}" target="_blank" > Click Here to Read Full News...</a>
          </div>
        </div>
        </div>  `

      html += newscontent;
    }

    news.innerHTML=html;

  } else {

    alert("Error comes during fetching");
  }



}


//Sending request to the server
xhr.send();


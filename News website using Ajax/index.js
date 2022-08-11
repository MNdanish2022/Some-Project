console.log('Index js Embeed');
//Grab The News Container
let fetchDiv = document.getElementById('fetchDiv');
// fetchdiv = addEventListener('click', fetch);

//News Data1

// key = '5b7b74bb3508417882f669adedff03db';
key = 'pub_101164628e323dcf7c6ee54f7ac26b7f90bc2';
sour = 'bbc-news';
// APi Request https://newsdata.io/api/1/news?apikey=pub_101164628e323dcf7c6ee54f7ac26b7f90bc2&country=pk

//Create a Ajax Request

const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsdata.io/api/1/news?apikey=${key}&country=pk&category=top`, true);

//Complete Request
xhr.onload = function () {
    if (this.status === 200) {
        let feb = JSON.parse(this.responseText);
        feb1 = feb.results;
        console.log(feb1);
        let newshtml = '';
        feb1.forEach(function (element,index) {
            
            let news = `<p>
            <button class="btn btn-primary mx-3 my-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample${index}" aria-expanded="false" aria-controls="collapseWidthExample">
              ${element.title}
            </button>
          </p>
          <div class='mx-3 my-3' style="min-height: 5px;">
            <div class="collapse collapse-horizontal" id="collapseWidthExample${index}">
              <div  class="card card-body" style="width: 800px;">
                ${element.description} <a href='${element.link}' target='_blank'>Read More</a>
              </div>
            </div>
          </div>`
    
            newshtml += news;

        });
        fetchDiv.innerHTML=newshtml;
    }
    else {
        console.log('Error Show');
    }
}

xhr.send();

//Time show in page
// let date= new Date();
// let time=document.getElementById('time');
// time.innerHTML=date;

function updateclock(){
  // Get the current Date
  let currentTime= new Date();

  //Extract Hours,Minute And Second
  let currentHour=currentTime.getHours();
  let currentMinute=currentTime.getMinutes();
  let currentSecond=currentTime.getSeconds();

      // Convert railway clock to AM/PM clock
      currentHour=(currentHour > 12 )? currentHour -12 : currentHour;
      currentHour=(currentHour ==0) ? 12:currentHour;

  //Chose AM and PM as per time of day
  let timeOfDay =(currentHour < 12)? 'PM' : 'AM';

  //Prepare the Time string from hours,minutes and second
  let currentTimeStr=currentHour + ':' + currentMinute
      + ":" + currentSecond + " " +timeOfDay;

  // Inserting the Time string inside DOM
  document.getElementById('time').innerHTML=currentTimeStr;
}

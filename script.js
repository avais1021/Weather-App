const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const form = document.querySelector('form');
const search = document.querySelector('#search');
const weather = document.querySelector('#wheather');
const searchIcon = document.querySelector('#searchIcon');

const getWheather = async (city) =>{
    weather.innerHTML=`<h1>Loading...</h1>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const responce = await fetch(url);
    const data = await responce.json();
    console.log(data);


    

    showData(data);
}

const showData = (data)=>{
    console.log('hiiiiiiii');

    if(data.cod == '404'){
        weather.innerHTML = `<h2>City Not Found</h2>`
    }

    weather.innerHTML = `
    <h2>${data.name}</h2>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <div>
                <h1>${data.main.temp} ℃</h1>
                <h2>${data.weather[0].main}</h2>
            </div>
    `;

}


form.addEventListener('submit' , function(event){
    event.preventDefault();

    getWheather(search.value);
    search.value = '';
    console.log('submit');
})

// ---

searchIcon.addEventListener('click' , function(){
    getWheather(search.value);
    search.value = '';
})



// ------------------------------------------------------

const city_country = document.querySelector('.city_country');
city_country.innerHTML= `
<p>Mumbai</p>
<p>hyderabad</p>
<p>Delhi</p>
<p>uttar pradesh</p>
<p>Delhi</p>
<p>Chennai</p>
<p>Pune</p>
<p>Ahmedabad</p>
<p>Jaipur</p>
<p>Kolkata</p>
<p>Surat</p>
<p>Lucknow</p>

`;

city_country.querySelectorAll('p').forEach((item)=>{
    item.addEventListener('click' , function(){
        getWheather(item.innerText);
    })
    console.log(item)
});


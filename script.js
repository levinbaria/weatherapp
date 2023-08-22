let weather={
    fetchWeather(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={api-id}&units=metric`)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather(data) {
        // console.log(data);
        const name=data.name;
        const temp = Math.round(data.main.temp);
        const humidity = data.main.humidity;
        const description = data.weather[0].description;
        const icon=data.weather[0].icon;
        const wind=data.wind.speed;
        // console.log(`${name} ${temp} ${description}`);
        document.querySelector(".city").innerHTML=name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" +icon +".png";
        document.querySelector(".temp").innerHTML=temp+"°C";
        document.querySelector(".description").innerHTML=description;
        document.querySelector(".humidity").innerHTML="Humidity :" +humidity+"%";
        document.querySelector(".wind").innerHTML="Speed:"+wind+"km/h";
        document.querySelector(".weather").classList.remove('loading');
        document.body.style.backgroundImage="url('https://source.unsplash.com/random/1600x900/?"+ description+"')";
        // document.body.style.backgroundImage="url('https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg')";
        // document.body.style.backgroundImage="url('https://source.unsplash.com/random/1600x900/?"+ name+"')"
        document.querySelector(".container").style.backgroundImage="url('https://source.unsplash.com/random/1600x900/?"+ humidity+"')"
    },
    search(){
        this.fetchWeather(document.querySelector(".search-bar-input").value);
    }
};

 document.querySelector(".btn").addEventListener("click",()=>{
    weather.search();
 });

 document.querySelector(".search-bar-input").addEventListener("keyup",(event)=>{
    if(event.key=="Enter"){
        weather.search();
    }
 })

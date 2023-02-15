let weather={
    apikey:"4ef1229f45d44d7d9ad897c6fdfa8368",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=4ef1229f45d44d7d9ad897c6fdfa8368")
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },

    displayWeather: function(data){
        const { name } = data;
        const {icon , description} =data.weather[0];
        const { temp, humidity} =data.main;
        const {speed} =data.wind;
        console.log(name,icon,description,temp,humidity,speed);

        document.querySelector('.location').innerHTML=name;
        document.querySelector('.weather-temp').innerHTML=temp +' ℃';
        document.querySelector('.weather-desc').innerHTML=description;
        document.querySelector('.prec-value').innerHTML=humidity+10;
        document.querySelector('.humi-value').innerHTML=humidity+ ' %';
        document.querySelector('.wind-value').innerHTML=speed+ ' km/hour';
        document.querySelector('.icon').src="https://openweathermap.org/img/wn/"+ icon +".png";
        
    },
   
    search: function(){
        this.fetchWeather(document.querySelector('input').value);
    }

};

document.querySelector('button').addEventListener("click",function(){
    weather.search();
})


let weather2={
    apikey:"4ef1229f45d44d7d9ad897c6fdfa8368",
    fetchWeather: function(city) {
        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&appid=4ef1229f45d44d7d9ad897c6fdfa8368')
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },

    displayWeather: function(data){
        const temp1=data.list[5].main.temp;
        const temp2=data.list[13].main.temp;
        const temp3=data.list[22].main.temp;
        const temp4=data.list[33].main.temp;

        document.querySelector('.day1').innerHTML=temp1;
        document.querySelector('.day2').innerHTML=temp2;
        document.querySelector('.day3').innerHTML=temp3;
        document.querySelector('.day4').innerHTML=temp4;

        console.log(temp1 ,temp3,temp2,temp4);
    },
   
    search: function(){
        this.fetchWeather(document.querySelector('input').value);
    }

};

document.querySelector('button').addEventListener("click",function(){
    weather2.search();
})










let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let today=date.getDate();
  
  let year=date.getFullYear();
  var mon = date.toLocaleString('default', { month: 'short' });
  let session = "AM";
  
    var a = new Date();
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var r = weekdays[a.getDay()];
    document.querySelector(".date-dayname").innerHTML = r;
    document.querySelector(".date-day").innerHTML = today+'-'+mon+'-'+year;
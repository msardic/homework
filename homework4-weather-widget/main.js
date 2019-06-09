fetch('https://api.openweathermap.org/data/2.5/weather?q=Istanbul,TR&appid=a7f8202996c8cae702b7a53aedf0057b&units=metric').then(function (res) {

  return res.json();

}).then(function (returnData) {

 let weatherData = document.getElementsByClassName('row')[0];
  
    // weatherData.insertAdjacentHTML('beforeend', '<div>'+returnData.name+'</div>' );


      let nowDate = new Date();
      let HH = nowDate.getUTCHours();
      let MM = nowDate.getUTCMinutes();
      let gmtTime = HH*3600+MM*60;
      let timeZone = returnData.timezone+gmtTime;
      let HHMM = new Date(timeZone * 1000).toISOString().substr(11, 5);
      
      // if (0<timeZone<21599 || 75600<timeZone<86400){
      //   let partOfDay = "night"
      //   }else if (21600<timeZone<46799){
      //       let partOfDay = "morning"
      //   }else if (46800<timeZone<64799){
      //       let partOfDay = "afternoon"
      //   }else if (64800<timeZone<75599){
      //       let partOfDay = "evening"
      //   }
        
    //   switch (timeZone) {
    //     case (timeZone < 21600):
    //         function myFunction() {
    //             alert("night");
    //         }
    //         break;
    //     case (timeZone < 46800):
    //         function myFunction() {
    //             alert("morning");
    //         }
    //         break;
    //     case (timeZone < 64800):
    //         function myFunction() {
    //             alert("afternoon");
    //         }
    //         break;
    //     case (timeZone < 75600):
    //         function myFunction() {
    //             alert("evening");
    //         }
    //         break;
    //     case (timeZone < 86400):
    //         function myFunction() {
    //             alert("night");
    //         }
    //         break;
    //     default:
    //         alert("none");
    //         break;
    // }


  weatherData.insertAdjacentHTML('beforeend',

    '<div class="col-md-4 ">' +
    '<div class="card my-4 shadow border-0">' +
    '<div class="card-body text-white nightSnowy">' +
    '<div class="row ">' +
    '<div class="col  ">' +
    ' <div class="card-text d-flex align-items-baseline">' +
    '<div class="city">city:</div>' +
    '<div class="cityName mx-2">' + returnData.name + ' ─</div>' +
    '</div>' +
    '<div class="card-text d-flex">' +
    '<div class="dayTime">NIGHT - '+HHMM+'</div>' +

    '</div>' +
    '<div class="card-text temperature">' + returnData.main.temp.toString().substr(0, 2) + '°' + '</div>' +
    '<div class="card-text windSpeed">' +
    '<i class="wi wi-strong-wind mx-3"></i>' + returnData.wind.speed + ' <span>KM/H</span>' +
    '</div>' +
    '</div>' +
    '<div class="col">' +
    '<div class="d-flex justify-content-center align-items-center iconSizeBig h-100">' +
    '<i class="wi wi-night-alt-snow-wind my-4"></i>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="d-flex">' +
    '<div class="d-flex flex-column justify-content-center align-items-center bottomBox">' +
    '<div class="dayInfo">MONDAY</div>' +
    '<i class="wi wi-night-alt-snow-wind bottomWeather"></i>' +
    '</div>' +
    '<div class="d-flex flex-column justify-content-center align-items-center bottomBox">' +
    '<div class="dayInfo">TUESDAY</div>' +
    '<i class="wi wi-night-alt-snow-wind bottomWeather"></i>' +
    '</div>' +
    '<div class="d-flex flex-column justify-content-center align-items-center bottomBox">' +
    '<div class="dayInfo">WEDNESDAY</div>' +
    '<i class="wi wi-night-alt-snow-wind bottomWeather"></i>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>'

  );




  //bu satırın altına inme parantez dışına çıkma.!!
})


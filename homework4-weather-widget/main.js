fetch('https://api.openweathermap.org/data/2.5/weather?q=Istanbul,TR&appid=a7f8202996c8cae702b7a53aedf0057b&units=metric').then(function (res) {

  return res.json();

}).then(function (returnData) {

  let weatherData = document.getElementsByClassName('row')[0];

  // weatherData.insertAdjacentHTML('beforeend', '<div>'+returnData.name+'</div>' );

  //gmt ye göre tarihi bulduran fonksiyon
  function dateFunc() {
    let nowDate = new Date();
    let gmtTime = nowDate.getUTCHours() * 3600 + nowDate.getUTCMinutes() * 60 + nowDate.getUTCSeconds();
    let timeCard = returnData.timezone + gmtTime;
    let HHMM = new Date(timeCard * 1000).toISOString().substr(11, 5);
    return HHMM;
  }

  const sonuc = dateFunc();

  //günün zamanlarını timezoneden çektiği bilgiye göre söyleyen fonksiyon
  function myFunction() {

    let nowDate = new Date();
    let gmtTime = nowDate.getUTCHours() * 3600 + nowDate.getUTCMinutes() * 60 + nowDate.getUTCSeconds();
    let timeCard = returnData.timezone + gmtTime;


    switch (true) {
      case (timeCard >= 0 && timeCard < 21600):
        partOfDay = "NIGHT";
        break;
      case (timeCard >= 21600 && timeCard < 46800):
        partOfDay = "MORNING";
        break;
      case (timeCard >= 46800 && timeCard < 64800):
        partOfDay = "AFTERNOON";
        break;
      case (timeCard >= 64800 && timeCard < 75600):
        partOfDay = "EVENING";
        break;
      case (timeCard >= 75600 && timeCard < 86400):
        partOfDay = "NIGHT";
        break;
      default:
        partOfDay = "nope";
        break;
    }
    return partOfDay;
  }

  const sonuc1 = myFunction();


  //apiden gelen bilgiye göre ekrana ikon bastıran fonksiyon


  function iconSelector() {
    let ikon = returnData.weather[0].icon; /*burada apide kullanılan arraya dikkat etmem lazım. */

    switch (true) {
      case (ikon == "01d"):
        iconSelect = "wi-day-sunny";
        break;
      case (ikon == "01n"):
        iconSelect = "wi-night-clear";
        break;
      case (ikon == "02d"):
        iconSelect = "wi-day-cloudy";
        break;
      case (ikon == "02n"):
        iconSelect = "wi-night-alt-cloudy";
        break;
      case (ikon == "03d" || ikon == "03n"):
        iconSelect = "wi-cloud";
        break;
      case (ikon == "04d" || ikon == "04n"):
        iconSelect = "wi-cloudy";
        break;
      case (ikon == "09d" || ikon == "09n"):
        iconSelect = "wi-showers";
        break;
      case (ikon == "10d"):
        iconSelect = "wi-day-showers";
        break;
      case (ikon == "10n"):
        iconSelect = "wi-night-alt-showers";
        break;
      case (ikon == "11d" || ikon == "11n"):
        iconSelect = "wi-thunderstorm";
        break;
      case (ikon == "13d" || ikon == "13n"):
        iconSelect = "wi-snow";
        break;
      default:
        iconSelect = "nope";
        break;
    }
    return iconSelect;
  }

  const sonuc3 = iconSelector()

  function backgroundSelector() {
    let forBackground = returnData.weather[0].icon;

    switch (true) {
      case (forBackground == "01d"):
        backgroundselect = "sunny";
        break;
      case (forBackground == "01n"):
        backgroundselect = "nightSnowy";
        break;
      case (forBackground == "02d"):
        backgroundselect = "cloudlyFull";
        break;
      case (forBackground == "02n"):
        backgroundselect = "cloudlyNight";
        break;
      case (forBackground == "03d" || forBackground == "03n"):
        backgroundselect = "cloudlyFull";
        break;
      case (forBackground == "04d" || forBackground == "04n"):
        backgroundselect = "cloudlyFull";
        break;
      case (forBackground == "09d" || forBackground == "09n"):
        backgroundselect = "mistyweather";
        break;
      case (forBackground == "10d"):
        backgroundselect = "cloudlySun";
        break;
      case (forBackground == "10n"):
        backgroundselect = "cloudlyNight";
        break;
      case (forBackground == "11d" || forBackground == "11n"):
        backgroundselect = "cloudlyFull";
        break;
      case (forBackground == "13d" || forBackground == "13n"):
        backgroundselect = "snowyWeather";
        break;
      default:
        backgroundselect = "nope";
        break;
    }
    return backgroundselect;
  }

  const sonuc4 = backgroundSelector()



  //insert adjacent metoduyla ekrana basmak için kullanılan kodlar
  weatherData.insertAdjacentHTML('beforeend',

    '<div class="col-md-4 ">' +
    '<div class="card my-4 shadow border-0">' +
    '<div class="card-body text-white ' + sonuc4 + ' ">' +
    '<div class="row ">' +
    '<div class="col  ">' +
    ' <div class="card-text d-flex align-items-baseline">' +
    '<div class="city">city:</div>' +
    '<div class="cityName mx-2">' + returnData.name + ' ─</div>' +
    '</div>' +
    '<div class="card-text d-flex">' +
    '<div class="dayTime"> ' + sonuc1 + '  - ' + sonuc + '</div>' +

    '</div>' +
    '<div class="card-text temperature">' + returnData.main.temp.toString().substr(0, 2) + '°' + '</div>' +
    '<div class="card-text windSpeed">' +
    '<i class="wi wi-strong-wind mx-3"></i>' + returnData.wind.speed + ' <span>KM/H</span>' +
    '</div>' +
    '</div>' +
    '<div class="col">' +
    '<div class="d-flex justify-content-center align-items-center iconSizeBig h-100">' +
    '<i class="wi ' + sonuc3 + ' my-4"></i>' +
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


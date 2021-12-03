
      let place = "臺北市";
      const time = document.getElementById("time");
      const temperature = document.getElementById("temperature");
      const city = document.getElementById("city");
      const weather = document.getElementById("weather");

 
      function updateTime() {
        let newDate = new Date();
        let hour = newDate.getHours();
        let mins = newDate.getMinutes();
        let sec = newDate.getSeconds();
        if(sec<10){
            sec = "0"+sec;
        }
        if(mins<10){
            mins = "0"+mins;
        }
        if(hour<10){
            mins = "0"+hour;
        }
        let outputText = `${hour}:${mins}:${sec}`;
        time.textContent = outputText;
      }


      setInterval(updateTime, 1000);

      fetch(
        `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-EBA69EF6-FA8E-4FD0-8F08-8EE64ECF440D&format=JSON&locationName=${place}&elementName=Wx`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          
          let parameterName = data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
          let parameterValue = data.records.location[0].weatherElement[0].time[0].parameter.parameterValue;
          console.log(data);
          temperature.innerHTML = parameterValue + '°C';
          city.innerHTML = place;
          weather.innerHTML = parameterName;

        });
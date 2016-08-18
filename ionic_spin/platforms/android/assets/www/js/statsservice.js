

  
    angular.module('starter').factory('stats', ['$timeout', 'bikeApi',stats]);

    function stats($timeout, bikeApi) {

        var data = { speed: 0, distance: 0, maxSpeed: 0, effort: 0, roomTemp: 0, wheelTemp: 0,lastUpdated:0 };

         

        var update = function () {
            //get new data
            console.log("updating");
         //   data.speed = data.speed + 1;
            bikeApi.getSensorData().then(function (sensorData) {
             //   data.lastUpdated = new Date();
                data.speed=sensorData.speed;
                if (sensorData.speed>data.maxSpeed){
                    data.maxSpeed=sensorData.speed;
                }

            });;
  
            data.calls += 1;
            console.log("updateTimer: " + data.lastUpdated);

            $timeout(update, 10000);
        };

        $timeout(update, 10000);
      var start=function() {
     //       update();
      //      $timeout(update, 10000);
       }
        

        return {
            data: data,
            start: start
        };
    }

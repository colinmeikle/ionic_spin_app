
(function () {
    'use strict';

    angular.module('starter').factory('bikeApi', ['$http','$q',bikeApi]);

    function bikeApi($http,$q) {
        var data = {};
        var serverAdd = "http://localhost:3000/data";
     

        function getSensorData() {
            var deferred = $q.defer();
            $http.get(serverAdd)
            .success(function(data){
                deferred.resolve({
                    speed: data.speed,
                    temp:  data.temp,
                    wheeltemp: data.wheeltemp,
                    revs: data.revs});

                   
            })
            .error(function(){
                console.log("Error make Http call to server");
                deferred.reject();
            });
            return deferred.promise;
        }

        function getCurrentSpeed() {
            if (data.speeds.length == 0) {
                return 0;
            }
           return data.speeds[data.speeds.length - 1];
        }

        function getCurrentTime() {
            if (data.times.length == 0) {
                return 0;
            }
            return data.times[data.times.length - 1];
        }
        function getDistance() {
            return data.distance;
        }
        function getTimes() {
            return data.times;
        }
        function getSpeeds() {
            return data.speeds;
        }

        return {
            getSensorData: getSensorData
            
        }
    }
})();
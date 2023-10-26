function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }


  

  function Point(x, y){ // only x and y
    this.x = x;
    this.y = y;

    this.distanceTo = function (point)
    {
        var dx = this.x - point.x;               // delta x
        var dy = this.y - point.y;               // delta y
        var dist = Math.sqrt(dx * dx + dy * dy); // distance
        return dist;
    };
}

var newPoint = new Point (10,100);
var nextPoint = new Point (25,5);


console.log(newPoint.distanceTo(nextPoint));



  export default getDistanceFromLatLonInKm

  // console.log(getDistanceFromLatLonInKm(59.3293371,13.4877472,59.3225525,13.4619422).toFixed(1));
<script>
var getRandomDataArray = function () {
  var dataArray = [];
  for (var i = 0; i < 7; i++) dataArray.push(Math.round(Math.random() * 100));
  return dataArray;
}

var chartData = {
  labels : ["January","February","March","April","May","June","July"],
  datasets : [
    {
      label: "My First dataset",
      fillColor : "rgba(220,220,220,0.2)",
      strokeColor : "rgba(220,220,220,1)",
      pointColor : "rgba(220,220,220,1)",
      pointStrokeColor : "#fff",
      pointHighlightFill : "#fff",
      pointHighlightStroke : "rgba(220,220,220,1)",
      data : getRandomDataArray()
    },
    {
      label: "My Second dataset",
      fillColor : "rgba(151,187,205,0.2)",
      strokeColor : "rgba(151,187,205,1)",
      pointColor : "rgba(151,187,205,1)",
      pointStrokeColor : "#fff",
      pointHighlightFill : "#fff",
      pointHighlightStroke : "rgba(151,187,205,1)",
      data : getRandomDataArray()
    }
  ]
}

window.onload = function(){
  var chartOptions = { responsive : true };
  var chart = document.getElementById("canvas").getContext("2d");
  window.myBar = new Chart(chart).Line(chartData, chartOptions);
}
</script>
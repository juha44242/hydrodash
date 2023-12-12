const xValues = [50,60,70,80,90,100,110,120,130,140,150];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("line"), {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
};


// line chart //

var lastTime = new Date('12 Dec 2023 08:25:00 GMT').getTime();
var data = [];

function getData() {
    data.shift();

    while (data.length < 20) {
        data.push({
            time: new Date((lastTime += 1000)),
            voltage: 1.1 + Math.random() / 2,
        });
    }

    return data;
}

const options = {
    container: document.getElementById('myChart'),
    data: getData(),
    series: [
        {
            xKey: 'time',
            yKey: 'voltage',
        },
    ],
    axes: [
        {
            type: 'time',
            position: 'bottom',
            nice: false,
            tick: {
                interval: agCharts.time.second.every(5),
            },
            label: {
                format: '%H:%M:%S',
            },
        },
        {
            type: 'number',
            position: 'left',
            label: {
                format: '#{.2f}V',
            },
        },
    ],
    title: {
        text: 'Voltage',
    },
};

const chart = agCharts.AgCharts.create(options);
var updating = false;

function startUpdates() {
    if (updating) {
        return;
    }

    updating = true;
    //@ts-ignore
    this.update();
    //@ts-ignore
    setInterval(this.update, 500);
}

/** inScope */
function update() {
    options.data = getData();
    agCharts.AgCharts.update(chart, options);
}

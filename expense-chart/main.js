function getQueryParameterValues() {
  var urlParams = new URLSearchParams(window.location.search);
  var parameterValues = {};
  urlParams.forEach(function (value, key) {
    parameterValues[key] = value;
  });
  return parameterValues;
}

var parameterValues = getQueryParameterValues();

console.log("Query parameter values:", parameterValues);
console.log(JSON.parse(parameterValues["graphData"]));

var graphData = JSON.parse(parameterValues["graphData"]);

var xAxisData = [];
var depositeData = [];
var withdrawData = [];

graphData.forEach(function (data) {
  xAxisData.push(data.month);
  depositeData.push(data.deposite);
  withdrawData.push(data.withdraw);
});

var option = {
  toolbox: {
    show: true,
    feature: {
      magicType: { show: true, type: ["line", "bar"] },
    },
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["Deposite", "Withdraw"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: xAxisData,
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Deposite",
      type: "line",
      data: depositeData,
      smooth: true,
    },
    {
      name: "Withdraw",
      type: "line",
      data: withdrawData,
      smooth: true,
    },
  ],
};

// ------------------------------ ECharts Config Start ------------------------------
var myChart = echarts.init(document.getElementById("main"));
myChart.setOption(option);
// ------------------------------ ECharts Config End ------------------------------

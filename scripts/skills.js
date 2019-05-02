  var options1 = {
    chart: {
      height: 300,
      type: "radialBar",
    },
    series: [90],
    labels: ['HTML5'],
    colors: ['#216556']
    
  };

  var options2 = {
    chart: {
      height: 300,
      type: "radialBar",
    },
    series: [70],
    labels: ['CSS3'],
    colors: ['#216556']
  };

  var options3 = {
    chart: {
      height: 300,
      type: "radialBar",
    },
    series: [60],
    labels: ['JavaScript'],
    colors: ['#216556']
  };


  var options4 = {
    chart: {
      height: 300,
      type: "radialBar",
    },
    series: [80],
    labels: ['SVN'],
    colors: ['#216556']
  };



  
  new ApexCharts(document.querySelector("#chart1"), options1).render();
  new ApexCharts(document.querySelector("#chart2"), options2).render();
  new ApexCharts(document.querySelector("#chart3"), options3).render();
  new ApexCharts(document.querySelector("#chart4"), options4).render();
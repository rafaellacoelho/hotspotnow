feather.replace()

    let barChart = document.getElementById('barChart').getContext('2d');

    const image = new Image();
    image.src = "../img/Vector.png"

    // CHART
    const xValues = [
      "14/08",
      "15/08",
      "16/08",
      "17/08",
      "18/08",
      "19/08",
      "20/08",
      "21/08",
      "22/08",
    ];

    const accessNet = [40, 30, 23, 29, 33, 45, 42, 39, 27];

    let chart = new Chart(barChart, {
      // The Type of Chart we want to create
      type: "bar",

      // The data for our dataset
      data: {
        labels: xValues,
        datasets: [
          {            
            barPercentage: 0.6,
            backgroundColor: "#D1D1F9",
            hoverBackgroundColor: "#5A2357",
            borderRadius: 10,
            data: accessNet,
          },
        ],
      },

      options: {
        animation: {
          duration: 2000,
        },
        plugins: {
          legend: {
            display: false,
          }
        },
        scales: {
          x: {            
            grid: {
              display: false
            },
            border: {
              display: false
            },
            ticks: {
              color: '#4F4F4F',
              font: {
                family: "'Poppins', sans-serif",
                size: 12,
              }
            }
          },
          y: {
            grid: {
              display: false
            },
            border: {
              display: false
            },
            min: 0
          }
        }
      }
    });

    yValues = [706, 135, 591, 284, 105, 110]

    // Create an instance of Chart object:
    const PizzaChart = new Chart('PizzaChart', {
      type: 'pie', //Declare the chart type
      data: {
        labels: yValues, //Defines each segment
        datasets: [{
          data: yValues, //Determines segment size
          //Color of each segment
          backgroundColor: [
            "#5A2357",
            "#7B2869",
            "#9D3C72",
            "#C85C8E",
            "#FFBABA",
            "#FFE0E0"],
        }]
      },
      options: {
        animation: {
          duration: 2000,
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    });


    zValues = [167,120]

    // Create an instance of Chart object:
    const DonnutChart = new Chart('DonnutChart', {
      type: 'doughnut', //Declare the chart type
      data: {
        labels: zValues, //Defines each segment
        datasets: [{
          data: zValues, //Determines segment size
          //Color of each segment
          backgroundColor: [
            "#5A2357",
            "#9D3C72"],
        }]
      },
      options: {
        animation: {
          duration: 2000,
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    });
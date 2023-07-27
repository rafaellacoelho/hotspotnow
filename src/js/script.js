feather.replace()


    let barChart = document.getElementById('barChart').getContext('2d');
    let pizzaChart = document.getElementById('pizzaChart').getContext('2d');
    let doughnutChart = document.getElementById('doughnutChart').getContext('2d');

    // image object
    const image = new Image(12,12);
    image.src = '../src/img/vector.svg'

    // BAR CHART
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
          },
          tooltip: {
            yAlign: 'bottom',
            usePointStyle: true,
            padding: {
              x: 16,
              y: 6
            },
            callbacks: {
              title: function() {
                  return '';
              },
              labelPointStyle: (context) => {
                return {
                  pointStyle: image,
                }
              }
            },
            
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

    

    // Pizza Charts

    yValues = [706, 135, 591, 284, 105, 110]

    let PizzaChart = new Chart('pizzaChart', {
      type: 'pie', 
      data: {
        labels: yValues, 
        datasets: [{
          data: yValues, 
          backgroundColor: [
            "#5A2357",
            "#7B2869",
            "#9D3C72",
            "#C85C8E",
            "#FFBABA",
            "#FFE0E0"],
        }],
      },
      options: {
        animation: {
          duration: 2000,
        },        
        layout: {
          padding: 22,
        },
        plugins: {
          tooltip: {
            enabled: false,
          },
          labels: {
            position: 'outside',
            render: 'value',
            textMargin: 6
          },
          legend: {
            display: false
          }
        }
      },     
    });

    // Doughnut Chart
    zValues = [167,120]

    const doughnutLabel = {
      id: 'doughnutLabel',
      beforeDatasetsDraw(chart, args, pluginOptions) {
        const {ctx, data} = chart;

        ctx.save();
        const xCoor = chart.getDatasetMeta(0).data[0].x;
        const yCoor = chart.getDatasetMeta(0).data[0].y;

        ctx.font = '30px Poppins';
        ctx.fillStyle = '#383737';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'
        ctx.fillText(zValues[0] + zValues[1], xCoor, yCoor - 15);
        ctx.fillText('Total', xCoor, yCoor + 25);

      }
    }

    let DoughnutChart = new Chart('doughnutChart', {
      type: 'doughnut', 
      data: {
        labels: zValues, 
        datasets: [{
          data: zValues, 
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
            display: false
          }
        }
      },
      plugins: [doughnutLabel]
    });
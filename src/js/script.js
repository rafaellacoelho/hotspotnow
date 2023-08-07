feather.replace()


let barChart = document.getElementById('barChart').getContext('2d');
let pizzaChart = document.getElementById('pizzaChart').getContext('2d');

// image object
const image = new Image(12, 12);
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
    datasets: [{
      barPercentage: 0.6,
      backgroundColor: "#D1D1F9",
      hoverBackgroundColor: "#5A2357",
      borderRadius: 10,
      data: accessNet,
    }, ],
  },

  options: {
    maintainAspectRatio: false,
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
          title: function () {
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

connection = ['Hotel Bristol 1° Andar', 'Hotel Bristol 3° Andar', 'Hotel Bristol Refeitorio', 'Hotel Bristol Salão', 'Hotel Bristol Recepção', 'Hotel Bristol 2° Andar']
yValues = [706, 135, 591, 284, 105, 110]

let PizzaChart = new Chart('pizzaChart', {
  type: 'pie',
  data: {
    labels: connection,
    datasets: [{
      data: yValues,
      backgroundColor: [
        "#5A2357",
        "#7B2869",
        "#9D3C72",
        "#C85C8E",
        "#FFBABA",
        "#FFE0E0"
      ],
    }],
  },
  options: {
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
    },
    layout: {
      padding: 22,
    },
    plugins: {
      tooltip: {
        backgroundColor: '#FBFAFF',
        titleColor: '#000',
        cornerRadius: 12,
        caretSize: 0,
        callbacks: {
          label: () => {
            return ''
          },
        }
      },
      labels: {
        position: 'outside',
        render: 'value',
        textMargin: 3
      },
      legend: {
        display: false
      }
    }
  },
});

// Drop 

document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.nav .nav_link').forEach(function(element){
    
    element.addEventListener('click', function (e) {

      let nextEl = element.nextElementSibling;
      let parentEl  = element.parentElement;	

        if(nextEl) {
            e.preventDefault();	
            let mycollapse = new bootstrap.Collapse(nextEl);
            
            if(nextEl.classList.contains('show')){
              mycollapse.hide();
            } else {
                mycollapse.show();
                // find other submenus with class=show
                var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                // if it exists, then close all of them
                if(opened_submenu){
                  new bootstrap.Collapse(opened_submenu);
                }
            }
        }
    }); // addEventListener
  }) // forEach
}); 


// MENU 

var mini = true;

function toggleSidebar() {
  if (mini) {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.mini = false;
  } else {
    document.getElementById("mySidebar").style.width = "85px";
    document.getElementById("main").style.marginLeft = "85px";
    this.mini = true;
  }
}
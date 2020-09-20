
$(document).ready(function () {

      var optionsShowFilms = {
        series: [{ data: [50, 125, 100, 50, 150, 52, 150]}],
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },

        colors: ['#98BFF9'],

        dataLabels: {
          enabled: true,
          offsetX: 5,
          offsetY: 1,
          style: {
            fontSize: '11px',
            colors: ['#F9D298'],
          },
          background: {
            enabled: true,
            foreColor: '#414141',
            padding: 10,
            borderRadius: 10,
            borderColor: '#F9D298',
            color: '#F9D298',
          },
        },

        stroke: {
          width: [2],
          curve: 'smooth'
        },

        grid: {
          show: true,
          borderColor: '#EBEFF2',
          strokeDashArray: [4],
          xaxis: {
            lines: {
                show: true
            }
          },   
        },
        
        markers: {
          size: 1
        },

        xaxis: {
          categories: ['08.07 - 14.07', '15.07 - 21.07', '15.07 - 21.07', '29.07 - 04.08', '05.08 - 11.08', '12.08 - 18.08', '19.08 - 25.08'],
        },

        yaxis: {
          min: 0,
          max: 200
        },
      };

      var optionsProfit = {
        series: [{ data: [95, 150, 100, 150, 200, 52, 100 ]}],
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },

        colors: ['#98BFF9'],

        dataLabels: {
          enabled: true,
          offsetX: 5,
          offsetY: 1,
          style: {
            fontSize: '11px',
            colors: ['#F9D298'],
          },
          background: {
            enabled: true,
            foreColor: '#414141',
            padding: 10,
            borderRadius: 10,
            borderColor: '#F9D298',
            color: '#F9D298',
          },
        },

        stroke: {
          width: [2],
          curve: 'smooth'
        },

        grid: {
          show: true,
          borderColor: '#EBEFF2',
          strokeDashArray: [4],
          xaxis: {
            lines: {
                show: true
            }
          },   
        },
        
        markers: {
          size: 1
        },

        xaxis: {
          categories: ['08.07 - 14.07', '15.07 - 21.07', '15.07 - 21.07', '29.07 - 04.08', '05.08 - 11.08', '12.08 - 18.08', '19.08 - 25.08'],
        },

        yaxis: {
          min: 0,
          max: 200
        },
      };

      var optionsViwers = {
        series: [{ data: [250,500,100,1000,800,150,500]}],
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },

        colors: ['#98BFF9'],

        dataLabels: {
          enabled: true,
          offsetX: 5,
          offsetY: 1,
          style: {
            fontSize: '11px',
            colors: ['#F9D298'],
          },
          background: {
            enabled: true,
            foreColor: '#414141',
            padding: 10,
            borderRadius: 10,
            borderColor: '#F9D298',
            color: '#F9D298',
          },
        },

        stroke: {
          width: [2],
          curve: 'smooth'
        },

        grid: {
          show: true,
          borderColor: '#EBEFF2',
          strokeDashArray: [4],
          xaxis: {
            lines: {
                show: true
            }
          },   
        },
        
        markers: {
          size: 1
        },

        xaxis: {
          categories: ['08.07 - 14.07', '15.07 - 21.07', '15.07 - 21.07', '29.07 - 04.08', '05.08 - 11.08', '12.08 - 18.08', '19.08 - 25.08'],
        },

        yaxis: {
          min: 0,
          max: 2000
        },
      };

      var optionFees = {
        series: [{ data: [55, 150,100,150,200,52,100 ]}],
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },

        colors: ['#98BFF9'],

        dataLabels: {
          enabled: true,
          offsetX: 5,
          offsetY: 1,
          style: {
            fontSize: '11px',
            colors: ['#F9D298'],
          },
          background: {
            enabled: true,
            foreColor: '#414141',
            padding: 10,
            borderRadius: 10,
            borderColor: '#F9D298',
            color: '#F9D298',
          },
        },

        stroke: {
          width: [2],
          curve: 'smooth'
        },

        grid: {
          show: true,
          borderColor: '#EBEFF2',
          strokeDashArray: [4],
          xaxis: {
            lines: {
                show: true
            }
          },   
        },
        
        markers: {
          size: 1
        },

        xaxis: {
          categories: ['08.07 - 14.07', '15.07 - 21.07', '15.07 - 21.07', '29.07 - 04.08', '05.08 - 11.08', '12.08 - 18.08', '19.08 - 25.08'],
        },

        yaxis: {
          min: 0,
          max: 200
        },
      };

      var optionSessions = {
        series: [{ data: [50, 125, 100, 50, 150, 52, 150 ]}],
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },

        colors: ['#98BFF9'],

        dataLabels: {
          enabled: true,
          offsetX: 5,
          offsetY: 1,
          style: {
            fontSize: '11px',
            colors: ['#F9D298'],
          },
          background: {
            enabled: true,
            foreColor: '#414141',
            padding: 10,
            borderRadius: 10,
            borderColor: '#F9D298',
            color: '#F9D298',
          },
        },

        stroke: {
          width: [2],
          curve: 'smooth'
        },

        grid: {
          show: true,
          borderColor: '#EBEFF2',
          strokeDashArray: [4],
          xaxis: {
            lines: {
                show: true
            }
          },   
        },
        
        markers: {
          size: 1
        },

        xaxis: {
          categories: ['08.07 - 14.07', '15.07 - 21.07', '15.07 - 21.07', '29.07 - 04.08', '05.08 - 11.08', '12.08 - 18.08', '19.08 - 25.08'],
        },

        yaxis: {
          min: 0,
          max: 200
        },
      };

      var chartShowFilms = new ApexCharts(document.querySelector("#chartShowFilms"), optionsShowFilms);
      var chartProfit = new ApexCharts(document.querySelector("#chartProfit"), optionsProfit);
      var chartViwers = new ApexCharts(document.querySelector("#chartViwers"), optionsViwers);
      var chartFees = new ApexCharts(document.querySelector("#chartFees"), optionFees);
      var chartSessions = new ApexCharts(document.querySelector("#chartSessions"), optionSessions);
      chartShowFilms.render();
      chartProfit.render();
      chartViwers.render();
      chartFees.render();
      chartSessions.render();
});
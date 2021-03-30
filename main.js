var data = [
    ['uz-fa', 0],
    ['uz-tk', 1],
    ['uz-an', 2],
    ['uz-ng', 3],
    ['uz-ji', 4],
    ['uz-si', 5],
    ['uz-ta', 6],
    ['uz-bu', 7],
    ['uz-kh', 8],
    ['uz-qr', 9],
    ['uz-nw', 10],
    ['uz-sa', 11],
    ['uz-qa', 12],
    ['uz-su', 13]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/uz/uz-all'
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },
    width:"1200px",
    mapNavigation: {
        enabled: false,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    series: [{
        data: data,
        name: 'Random data',
        color:"#199174",
        states: {
            hover: {
                color: '#F5CD7A'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}',
        }
    }]
});
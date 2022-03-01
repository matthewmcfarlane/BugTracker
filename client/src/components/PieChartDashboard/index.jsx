
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts'


const PieChart = () => {
    
    const distributionData = () => {
        return {
            name: 'name',
            symbol: 'symbol',
            y: 'y',
            shares: 'shares'
        }
    }
    
    const options = {
        chart: {
            plotBackgroundColor: 'red',
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text:'Tickets by Status'
        },
        tooltip: {
            pointFormat: 'Value: <b>$ {point.y: .2f}</b>, Shares: {point.shares}'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: false,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format:'{point.name} ({point.symbol}): {point.percentage: .1f} %'
                }
            }
        },
        credits: {
            enabled: false
        },
        series:[{
            name: 'Tickets',
            colorByPoint: true,
            data: distributionData
        }]

    }
    
    return (
        <div className='pl-44 pt-44' >

        

        {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
        </div>
    )}

export default PieChart
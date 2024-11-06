import React, {useState} from "react";
import ApexCharts from 'react-apexcharts';
import ChartContainer from "@/modules/server/components/details/charts/container";
import Select from "@/components/Form/Item/Select";
import RangeSelect from "@/modules/server/components/details/charts/range-select";

const ChartRAM = () => {

    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: 'area',
            fontFamily: 'Vazirmatn',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 1,
        },
        fill: {
            type: 'gradient',
            // opacity: '0.3'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    });

    const [series, setSeries] = useState([
        {
            name: 'رم',
            data: [31, 40, 100, 28, 51, 42, 109]
        },
    ]);

    return (
        <ChartContainer
            title="مصرف رم"
            icon="ram"
            meta={<RangeSelect />}
        >
            <div style={{direction: 'ltr'}}>
                <ApexCharts options={options} series={series} type="area" height={350}/>
            </div>
        </ChartContainer>
    );
};

export default ChartRAM;
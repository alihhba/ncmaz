import React, {useEffect, useState} from "react";
import ApexCharts from 'react-apexcharts';
import RangeSelect from "@/modules/server/components/details/charts/range-select";
import ChartContainer from "@/modules/server/components/details/charts/container";
import useResourceAction from "@/hooks/useResourceAction";

const ChartIO = ({serverId, data}) => {

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
            name: 'نوشتن',
            data: []
        },
        {
            name: 'خواندن',
            data: []
        }
    ]);


    const [period, setPeriod] = useState('hour');

    const {id} = data || {};

    const {fetchList} = useResourceAction(`servers/${serverId}/usage`);

    const {items: usageData} = fetchList({
        filters: [
            {field: 'type', operator: 'eq', value: 'io'},
            {field: 'period', operator: 'eq', value: period},
        ],
    });

    useEffect(() => {
        const {
            time_series: timeSeries = [],
            read = [],
            write = [],
        } = usageData || {};

        setSeries([
            {
                name: 'نوشتن',
                data: write
            },
            {
                name: 'خواندن',
                data: read
            }
        ])

        setOptions({...options, xaxis: {
                type: 'datetime',
                categories: timeSeries
            },})
    }, [usageData]);

    return (
        <ChartContainer
            title="دیسک"
            icon="hard-drive"
            meta={(
                <RangeSelect
                    value={period}
                    onChange={setPeriod}
                />
            )}
        >
            <div style={{direction: 'ltr'}}>
                <ApexCharts options={options} series={series} type="area" height={350}/>
            </div>
        </ChartContainer>
    );
};

export default ChartIO;
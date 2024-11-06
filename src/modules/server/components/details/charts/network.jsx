import React, {useEffect, useState} from "react";
import ApexCharts from 'react-apexcharts';
import RangeSelect from "@/modules/server/components/details/charts/range-select";
import ChartContainer from "@/modules/server/components/details/charts/container";
import useResourceAction from "@/hooks/useResourceAction";

const ChartNetwork = ({serverId, data}) => {

    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: 'line',
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
            width: 2,
        },
        fill: {
            type: 'gradient',
        },
        xaxis: {
            type: 'datetime',
            categories: []
        },
        yaxis: {
            labels: {
                formatter: value => `${value} MB`
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    });

    const [series, setSeries] = useState([
        {
            name: 'دریافت',
            data: []
        },
        {
            name: 'ارسال',
            data: []
        }
    ]);

    const [period, setPeriod] = useState('hour');

    const {id} = data || {};

    const {fetchList} = useResourceAction(`servers/${serverId}/usage`);

    const {items: usageData} = fetchList({
        filters: [
            {field: 'type', operator: 'eq', value: 'network'},
            {field: 'period', operator: 'eq', value: period},
        ],
    });

    useEffect(() => {
        const {
            time_series: timeSeries = [],
            send = [],
            receive = [],
        } = usageData || {};

        setSeries([
            {
                name: 'دریافت',
                data: receive
            },
            {
                name: 'ارسال',
                data: send
            }
        ])

        setOptions({...options, xaxis: {
                type: 'datetime',
                categories: timeSeries
            },})
    }, [usageData]);

    return (
        <ChartContainer
            title="شبکه"
            icon="network"
            meta={(
                <RangeSelect
                    value={period}
                    onChange={setPeriod}
                />
            )}
        >
            <div style={{direction: 'ltr'}}>
                <ApexCharts options={options} series={series} type="line" height={350}/>
            </div>
        </ChartContainer>
    );
};

export default ChartNetwork;
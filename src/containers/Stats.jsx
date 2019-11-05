import React from 'react';
import {Bar, Line} from 'react-chartjs-2';

const Stats = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(0, 123, 255)',
        borderColor: 'rgb(0, 123, 255)',
        data: [30, 25, 20, 15, 10, 5, 0],
        }]
    }
    return(
        <>
            <div className="container pt-5">
                <Bar data={data}/>
            </div>
        </>
    )
}


export default Stats;
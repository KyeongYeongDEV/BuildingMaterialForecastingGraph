import ReactApexChart from "react-apexcharts";
import data from "./data";

function Chart() {
  return (
    <div>
      <ReactApexChart
        type="line"
        series={[
          { name: "재료 가격", data: data.map(item => item.price) }
        ]}
        options={{
          chart: {
            height: 250,
            width: 400,
            zoom: {
              enabled: false
            }
          },
          xaxis: {
            type: "category",
            categories: data.map(item => item.quarter),
            labels: {
              rotate: -45,
              rotateAlways: true
            }
          },
          yaxis: {
            title: {
              text: "재료 가격"
            }
          },
          title: {
            text: "재료 가격 변동 그래프",
            align: "center",
            margin: 20,
            offsetY: 20,
            style: {
              fontSize: "20px"
            }
          }
        }}
      />
    </div>
  );
}

export default Chart;

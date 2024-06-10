import React from "react";
import ReactApexChart from "react-apexcharts";
import data from "./data";

const seriesData = data.map(item => item.price);
const categoriesData = data.map(item => item.quarter);

// 2024년도 이후의 데이터 포인트를 찾기 위한 인덱스
const thresholdIndex = data.findIndex(item => item.quarter.includes('24년'));

// 색상을 설정하는 함수
const getColor = (index) => {
  return index < thresholdIndex ? '#008FFB' : '#FF4560'; // 2024년 이전은 파란색, 이후는 빨간색
};

function Chart() {
  return (
    <div>
      <ReactApexChart
        type="line"
        series={[
          {
            name: "재료 가격",
            data: seriesData,
          },
        ]}
        options={{
          chart: {
            height: 250,
            width: 400,
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: true
            }
          },
          xaxis: {
            type: "category",
            categories: categoriesData,
            labels: {
              rotate: -45,
              rotateAlways: true,
            },
          },
          yaxis: {
            title: {
              text: "재료 가격",
            },
          },
          title: {
            text: "재료 가격 변동 그래프",
            align: "center",
            margin: 20,
            offsetY: 20,
            style: {
              fontSize: "20px",
            },
          },
          markers: {
            size: 6, // 마커 크기 설정
            colors: categoriesData.map((_, index) => getColor(index)),
          },
          stroke: {
            width: 3, // 라인의 두께 설정
            curve: 'smooth', // 라인의 형태를 곡선으로 설정
            colors: categoriesData.map((_, index) => getColor(index)),
          },
        }}
      />
    </div>
  );
}

export default Chart;

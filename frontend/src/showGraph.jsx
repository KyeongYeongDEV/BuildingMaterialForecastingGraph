import React from "react";
import data from "./data";
import ReactApexChart from "react-apexcharts";

// 재료 가격 및 분기 데이터 추출
const seriesData = data.map(item => item.price);
const categoriesData = data.map(item => item.quarter);

// 24년도 2분기의 인덱스 찾기
const quarterIndex24 = categoriesData.findIndex(item => item.includes('24년 2분기'));

// 색상을 설정하는 함수
const getColor = (index) => {
  return index < quarterIndex24 ? '#008FFB' : '#FF4560'; // 24년도 2분기 이전은 파란색, 이후는 빨간색
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
            height: 350,
            width: 800,
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: true,
            },
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
          annotations: {
            xaxis: [
              quarterIndex24 !== -1 && {
                x: categoriesData[quarterIndex24],
                borderColor: '#FF4560',
                label: {
                  borderColor: '#FF4560',
                  style: {
                    color: '#fff',
                    background: '#FF4560',
                  },
                  text: '24년 2분기',
                  orientation: 'vertical',
                },
              },
            ].filter(Boolean), // 유효한 값만 남기기
          },
        }}
      />
    </div>
  );
}

export default Chart;

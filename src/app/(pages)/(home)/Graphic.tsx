"use client";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Order } from "@/app/types";

type Props = {
  data: Order[];
};
const Graphic = ({ data }: Props) => {
  // labels dizisinin türünü string[] olarak tanımlıyoruz
  const labels: string[] = data.map((i) => i.order_date);

  const graphData = {
    labels,
    datasets: [
      {
        label: "Satış Fiyatı",
        data: data.map((i) => i.total_price),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line data={graphData}  options={{responsive:true}}/>;
};

export default Graphic;

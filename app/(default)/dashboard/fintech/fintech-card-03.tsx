"use client";

import BarChart05 from "@/components/charts/bar-chart-05";

// Import utilities
import { tailwindConfig } from "@/components/utils/utils";

export default function FintechCard03() {
  const chartData = {
    labels: [
      "S","M","T","W","T","F","S"
    ],
    datasets: [
      {
        label: "This Week",
        data: [800, 2600, 4000, 1200, 3200, 1700],
        backgroundColor: tailwindConfig.theme.colors.slate[300],
        hoverBackgroundColor: tailwindConfig.theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Price
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart05 data={chartData} width={595} height={248} />
    </div>
  );
}

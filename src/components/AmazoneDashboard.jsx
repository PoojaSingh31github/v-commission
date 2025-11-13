import {
  MousePointerClick,
  Eye,
  DollarSign,
  TrendingUp,
  ShoppingCart,
  Package,
  Banknote,
  Coins,
} from "lucide-react";
import React from "react";
import Chart from "react-apexcharts";
import TopProductsAndBrands from "./TopProductsAndBrands";

const AmazonDashboard = () => {
  const sparklineOptions = {
    chart: {
      type: "line",
      sparkline: {
        enabled: true,
      },
      animations: {
        enabled: true,
        easing: "linear",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 800,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 800,
        },
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => "",
        },
      },
    },
  };

  const metricsData = [
    {
      id: "clicks",
      title: "Clicks",
      value: "25,220",
      change: "-45%",
      changePositive: false,
      icon: <MousePointerClick className="text-white h-5" />,
      iconBg: "bg-blue-400",
      chartColor: "#2563EB",
      chartData: [30, 25, 36, 30, 45, 35, 40, 30],
    },
    {
      id: "dpv",
      title: "DPV",
      value: "2,520",
      change: "+12%",
      changePositive: true,
      icon: <Eye className="text-white h-5" />,
      iconBg: "bg-blue-600",
      chartColor: "#2563EB",
      chartData: [20, 30, 45, 35, 50, 40, 35, 25],
    },
    {
      id: "payout",
      title: "Payout",
      value: "$4,500",
      change: "+22%",
      changePositive: true,
      icon: <DollarSign className="text-white h-5" />,
      iconBg: "bg-green-400",
      chartType: "bar",
      chartColor: "#22D3EE",
      chartData: [5, 10, 15, 8, 12, 18, 14, 10, 6, 12, 15, 8],
    },
    {
      id: "cr",
      title: "CR",
      value: "3.5%",
      change: "+0.5%",
      changePositive: true,
      icon: <TrendingUp className="text-white h-5" />,
      iconBg: "bg-purple-400",
      chartColor: "#A78BFA",
      chartData: [15, 25, 20, 30, 35, 28, 40, 35],
    },
    {
      id: "addToCart",
      title: "Add to Cart",
      value: "4,782",
      change: "+65%",
      changePositive: true,
      icon: <ShoppingCart className="text-white h-5" />,
      iconBg: "bg-pink-400",
      chartColor: "#FB7185",
      chartData: [10, 15, 25, 20, 15, 10, 8, 5],
      chartDashed: true,
    },
    {
      id: "orders",
      title: "Orders",
      value: "4,782",
      change: "+65%",
      changePositive: true,
      icon: <Package className="text-white h-5" />,
      iconBg: "bg-gray-700",
      chartColor: "#64748B",
      chartData: [10, 15, 25, 20, 15, 10, 8, 5],
      chartDashed: true,
    },
    {
      id: "saleAmount",
      title: "Sale Amount",
      value: "$6,987",
      change: "+68%",
      changePositive: true,
      icon: <Banknote className="text-white h-5" />,
      iconBg: "bg-green-500",
      chartType: "bar",
      chartColor: "#22D3EE",
      chartData: [8, 12, 15, 10, 14, 18, 12, 8, 10, 15, 12, 8],
    },
    {
      id: "earningsPerClick",
      title: "Earnings Per Click",
      value: "$2.15",
      change: "+0.12",
      changePositive: true,
      icon: <Coins className="text-white h-5" />,
      iconBg: "bg-blue-700",
      chartType: "bar",
      chartColor: "#2563EB",
      chartData: [6, 10, 14, 8, 12, 16, 10, 8, 12, 15, 10, 6],
    },
  ];

  const topBrands_1 = [
    {
      id: 1,
      name: "Smart Watch",
      productCount: "50 product",
      logo: "https://azaffiliates-dashboard-dev.web.app/assets/images/dashboard/ecommerce-dashboard/wristwatch.png",
      orders: 145,
      saleAmount: "$34,500",
      payout: "$4,140",
    },
    {
      id: 2,
      name: "Shoes",
      productCount: "200 product",
      logo: "	https://azaffiliates-dashboard-dev.web.app/assets/images/dashboard/ecommerce-dashboard/shoes.png",
      orders: 267,
      saleAmount: "$45,200",
      payout: "$3,164",
    },
    {
      id: 3,
      name: "Airpods Pro",
      productCount: "20 product",
      logo: "	https://azaffiliates-dashboard-dev.web.app/assets/images/dashboard/ecommerce-dashboard/earphone.png",
      orders: 189,
      saleAmount: "$50,800",
      payout: "$4,572",
    },
    {
      id: 4,
      name: "Purce",
      productCount: "180 product",
      logo: "	https://azaffiliates-dashboard-dev.web.app/assets/images/dashboard/ecommerce-dashboard/backpack.png",
      orders: 298,
      saleAmount: "$48,600",
      payout: "$7,290",
    },
    {
      id: 5,
      name: "Tree Pot",
      productCount: "80 product",
      logo: "	https://azaffiliates-dashboard-dev.web.app/assets/images/dashboard/ecommerce-dashboard/plant.png",
      orders: 123,
      saleAmount: "$57,900",
      payout: "$7,527",
    },
  ];

  

  const topBrands_2 = [
    {
      id: 1,
      name: "Amazon",
      logo: "https://azaffiliates-dashboard-dev.web.app/assets/images/dashboard/ecommerce-dashboard/amazon.png",
      orders: 342,
      saleAmount: "$89,750",
      payout: "$8,975",
    },
    {
      id: 2,
      name: "Nyka",
      logo: "https://azaffiliates-dashboard-dev.web.app/assets/images/dashboard/ecommerce-dashboard/nyka.png",
      logoBg: "bg-pink-500",
      orders: 198,
      saleAmount: "$45,650",
      payout: "$4,565",
    },
    {
      id: 3,
      name: "Shopify",
      logo: "https://azaffiliates-dashboard-dev.web.app/assets/images/dashboard/ecommerce-dashboard/shopify.png",
      logoBg: "bg-green-600",
      orders: 287,
      saleAmount: "$76,890",
      payout: "$7,689",
    },
    {
      id: 4,
      name: "eBay",
      logo: "https://azaffiliates-dashboard-dev.web.app/assets/images/dashboard/ecommerce-dashboard/ebay.png",
      orders: 245,
      saleAmount: "$67,340",
      payout: "$6,734",
    },
    {
      id: 5,
      name: "Walmart",
      logo: "https://azaffiliates-dashboard-dev.web.app/assets/images/dashboard/ecommerce-dashboard/walmart.png",
      logoBg: "bg-yellow-400",
      orders: 156,
      saleAmount: "$42,890",
      payout: "$4,289",
    },
  ];

  const renderChart = (metric) => {
    const chartType = metric.chartType || "line";

    const options = {
      ...sparklineOptions,
      chart: {
        ...sparklineOptions.chart,
        type: chartType,
      },
      colors: [metric.chartColor],
      stroke: {
        curve: "smooth",
        width: chartType === "line" ? 2 : 0,
        dashArray: metric.chartDashed ? 5 : 0,
      },
      fill: {
        opacity: chartType === "bar" ? 1 : 1,
      },
      plotOptions:
        chartType === "bar"
          ? {
              bar: {
                columnWidth: "60%",
                borderRadius: 2,
              },
            }
          : {},
    };

    const series = [
      {
        data: metric.chartData,
      },
    ];

    return (
      <div className="h-16 w-28">
        <Chart options={options} series={series} type={chartType} height={64} />
      </div>
    );
  };

  return (
    <div className="">
      <div className="text-3xl font-extrabold text-pink-600 mb-3 drop-shadow-sm">
        <h1 className="">Amazon Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {metricsData.map((metric) => (
          <div
            key={metric.id}
            className="bg-white rounded-2xl p-4 shadow-md transition-shadow duration-300"
          >
            <div
              className={`${metric.iconBg} w-10 h-10 rounded-2xl flex items-center justify-center text-xl mb-4 shadow-md`}
            >
              {metric.icon}
            </div>

            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">
                  {metric.title}
                </p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-xl font-bold text-gray-600">
                    {metric.value}
                  </h3>
                  <span
                    className={`text-sm font-semibold ${
                      metric.changePositive ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {metric.change}
                  </span>
                </div>
              </div>

              <div>{renderChart(metric)}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <TopProductsAndBrands data={topBrands_1} name={'Products'}/>
          <TopProductsAndBrands data={topBrands_2} name={'Brands'}/>
        </div>
      </div>
    </div>
  );
};

export default AmazonDashboard;





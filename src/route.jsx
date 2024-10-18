import AppLayout from "./AppLayout.jsx";
import Home from "./Home/index.jsx";
import Login from "./Login/index.jsx";
import SingleGisMapDemo from "@/pages/gismap/SingleGisMapDemo.jsx";
import MultiGisMapDemo from "@/pages/gismap/MultiGisMapDemo.jsx";
import MarkGisMapDemo from "@/pages/gismap/MarkGisMapDemo.jsx";
import D3BarDemo from "@/pages/d3/D3BarDemo.jsx";
import DocExportorDemo from "@/pages/docx/DocExportorDemo.jsx";
import HotMap from "@/pages/echarts/map/HotMap.jsx";
import HrmsMap from "@/pages/echarts/map/HrmsMap.jsx";
import HeBeiMap from "@/pages/echarts/map/HeBeiMap.jsx";
import SiJiaZhuangMap from "@/pages/echarts/map/SiJiaZhuangMap.jsx";
import HbProvinceMap from "@/pages/echarts/map/HbProvince.jsx";
import HbBankMap from "@/pages/echarts/map/HbBank.jsx";

const routeBody = [
  {
    path: "home",
    title: "首页",
    element: <Home />,
  },
  {
    path: "gismap",
    title: "gismap",
    children: [
      {
        path: "SingleGisMap",
        title: "SingleGisMap",
        element: <SingleGisMapDemo />,
      },
      {
        path: "MultiGisMap",
        title: "MultiGisMap",
        element: <MultiGisMapDemo />,
      },
      {
        path: "MarkGisMap",
        title: "MarkGisMap",
        element: <MarkGisMapDemo />,
      },
    ],
  },
  {
    path: "echartsMap",
    title: "echartsMap",
    children: [
      {
        path: "HotMap",
        title: "HotMap",
        element: <HotMap />,
      },
      {
        path: "HrmsMap",
        title: "HrmsMap",
        element: <HrmsMap />,
      },
      {
        path: "HeBeiMap",
        title: "HeBeiMap",
        element: <HeBeiMap />,
      },
      {
        path: "SiJiaZhuangMap",
        title: "SiJiaZhuangMap",
        element: <SiJiaZhuangMap />,
      },
      {
        path: "HbProvinceMap",
        title: "HbProvinceMap",
        element: <HbProvinceMap />,
      },
      {
        path: "HbBankMap",
        title: "HbBankMap",
        element: <HbBankMap />,
      },
    ],
  },
  {
    path: "docxtemplater",
    title: "docxtemplater",
    children: [
      {
        path: "export1",
        title: "export1",
        element: <DocExportorDemo />,
      },
    ],
  },
  {
    path: "D3demo",
    title: "D3demo",
    children: [
      {
        path: "bar",
        title: "柱状图",
        element: <D3BarDemo />,
      },
    ],
  },
  {
    path: "dashboard",
    title: "公告板",
    element: <div>{"dashboard"}</div>,
  },
  {
    path: "about",
    title: "关于",
    element: <div>about</div>,
  },
];

export { routeBody };

const routeTree = [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        children: [...routeBody],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routeTree;

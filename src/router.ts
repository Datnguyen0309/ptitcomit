export type TMenus = {
  path: string;
  title: string;
  childs?: {
    path: string;
    title: string;
  }[];
}[];
export const menus = [
  {
    path: "/", // the url
    title: "TRANG CHỦ",
  },

  {
    path: "/nganh-hoc", // the url
    title: "NGÀNH HỌC",
    childs: [
      {
        path: "/nganh-cong-nghe-thong-tin",
        title: "Công nghệ thông tin",
      },
      {
        path: "/nganh-ky-thuat-dien-tu-vien-thong",
        title: "Kỹ thuật điện tử viễn thông",
      },
      {
        path: "/nganh-quan-tri-kinh-doanh",
        title: "Quản trị kinh doanh",
      },
    ],
  },

  {
    path: "/tuyen-sinh", // the url
    title: "TUYỂN SINH",
  },
  {
    path: "/tin-tuc", // the url
    title: "TIN TỨC & SỰ KIỆN", // view rendered
  },
];

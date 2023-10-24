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
    title: "Trang chủ",
  },
  {
    path: "/gioi-thieu", // the url
    title: "Giới thiệu",
  },

  {
    path: "/nganh-dao-tao", // the url
    title: "Ngành đào tạo",
  },
  {
    path: "/lich-khai-giang", // the url
    title: "Lịch khai giảng",
  },
  {
    path: "/tuyen-sinh", // the url
    title: "Tuyển sinh",
  },
  {
    path: "/tin-tuc", // the url
    title: "Tin tức", // view rendered
  },
];

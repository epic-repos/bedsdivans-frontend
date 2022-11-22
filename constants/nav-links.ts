interface SubMenuTypes {
  name: string;
  path: string;
  active?: string;
}

export interface MenuTypes {
  name: string;
  path: string;
  active?: string;
  subMenu?: SubMenuTypes[];
}

interface NavigationLinksTypes {
  name: string;
  path: string;
  active?: string;
  subMenu?: MenuTypes[];
}

const navigationLinks: NavigationLinksTypes[] = [
  {
    name: "Divan Beds",
    path: "/divan-Beds",
    subMenu: [
      {
        name: "House Fabric Divan Beds",
        path: "/beds/divan-beds/house-fabric-divan-beds/",
      },
      {
        name: "Crushed Velvet Beds",
        path: "/beds/divan-beds/crushed-divan-beds/",
      },
      {
        name: "Suede Fabric Divan Beds",
        path: "/beds/divan-beds/suede-divan-bed/",
      },
      {
        name: "Low Divan Beds",
        path: "/beds/divan-beds/low-divan-beds/",
      },
      {
        name: "Divan Bases",
        path: "/beds/divan-beds/divanbases/",
      },
    ],
  },
  {
    name: "All Beds",
    path: "/all-beds",
    subMenu: [
      {
        name: "Ottoman Beds",
        path: "/beds/ottoman-beds/",
        subMenu: [
          {
            name: "Storage Bed",
            path: "/beds/storage-bed/",
          },
        ],
      },
      {
        name: "Sleigh Beds",
        path: "/beds/sleigh-bed/",
        subMenu: [
          {
            name: "Florida Bed Range",
            path: "/beds/sleigh-beds/florida-bed-range/",
          },
          {
            name: "Ammbasador Range",
            path: "/beds/sleigh-beds/ambassador-range/",
          },
          {
            name: "Kendall Bed",
            path: "/beds/sleigh-beds/kendall-bed/",
          },
          {
            name: "Swan Bed Range",
            path: "/beds/sleigh-beds/swan-bed-range/",
          },
          {
            name: "Wing Bed Range",
            path: "/beds/sleigh-beds/wing-bed-range/",
          }
        ]
      },
    ],
  },
  {
    name: "Shop By Bed Size",
    path: "/beds/shop-by-bed-size/",
    subMenu:[{
        name: 'Single (3"0)',
        path: "/beds/shop-by-bed-size/single-30/",
    },
    {
        name: 'Small Double (4"0)',
        path: "/beds/shop-by-bed-size/small-double-40/",
    },
    {
        name: 'Double (4"6)',
        path: "/beds/shop-by-bed-size/double-46/",
    },
    {
        name: 'King (5"0)',
        path: "/beds/shop-by-bed-size/king-50/",
    },
    {
        name: 'Super King (6"0)',
        path: "/beds/shop-by-bed-size/super-king-60/",
    },
]
  },
  {
    name: "Mattresses",
    path: "/beds/mattresses/",
  },
  {
    name: "Headboards",
    path: "/beds/headboards/",
  },
  {
    name: "Headboards",
    path: "/beds/furniture/garden-furniture/",
  },
];

export default navigationLinks;

// FOR BED SELECT BY OPTIONS

import { createSlice } from "@reduxjs/toolkit";

interface BedTypes {
  bedSize: string;
  bedColor: string;
  bedHeadBoard: string;
  bedStorage: string;
  bedFeet: string;
  bedMatters: string;
  bedImage: string;
  bedPrice: string;
  selectedBedData: any;
}

const initialState: BedTypes = {
  bedSize: `(2'6" x 6')- Small Single`,
  bedColor: "grey linen",
  bedHeadBoard: "no headboard",
  bedStorage: "no storage",
  bedFeet: "Free Castor Wheels",
  bedMatters: "no matters",
  bedImage: "/product/color/greylinen.png",
  bedPrice: "£89",



  selectedBedData: {
    content: `(2'6" x 6')- Small Single`,
    iconUrl:
      "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/2.6ft_Single.jpg?v=1637690357&width=200&height=200",
    imageUrl: "/product/color/greylinen.png",
    price: `£89`,
    size: 2.6,
    bedColor: [
      {
        content: `(2'6" x 6')- Small Single`,
        iconUrl:
          "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/2.6ft_Single.jpg?v=1637690357&width=200&height=200",
        imageUrl: "/product/color/greylinen.png",
        price: `£89`,
        size: 2.6,
        bedColor: [
          {
            iconUrl:
              "https://www.bedsdivans.co.uk/wp-content/uploads/2021/01/blue-plush-velvet-150x150.jpg",
            content: "blue plush",
            imageUrl: "/product/color/blueplush.png",
            price: `£900`,
          },
          {
            iconUrl:
              "https://www.bedsdivans.co.uk/wp-content/uploads/2021/01/index-150x150.png",
            content: "grey linen",
            imageUrl: "/product/color/greylinen.png",
            price: `£900`,
          },
        ],
        bedHeadBoard: [
          {
            iconUrl:
              "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/headboard-icon-02.jpg?v=1638187185&width=200&height=200",
            content: "26 Inch Headboard",
            imageUrl: "",
            price: `£900`,
          },
          {
            iconUrl:
              "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/floor-standing-headboard-icon-02.png?v=1641389356&width=200&height=200",
            content: "48 Inch Floor Standing Headboard",
            imageUrl: "",
            price: `£900`,
          },
        ],
        bedStorage: [
          {
            iconUrl:
              "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/No-Storage-01.jpg?v=1639489840&width=200&height=200",
            content: `No Storage`,
            imageUrl: "",
            price: `£900`,
          },
          {
            iconUrl:
              "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/2Foot_Side.jpg?v=1637688660&width=200&height=200",
            content: `2 Drawers Same side`,
            imageUrl: "",
            price: `£900`,
          },
          {
            iconUrl:
              "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/2_Same_Side.jpg?v=1637688660&width=200&height=200",
            content: `2 Drawers Foot End`,
            imageUrl: "",
            price: `£900`,
          },
          {
            iconUrl:
              "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/4_Drawer.jpg?v=1637688660&width=200&height=200",
            content: `4 Drawers `,
            imageUrl: "",
            price: `£900`,
          },
        ],
        bedFeet: [
          {
            iconUrl:
              "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/feets-02.png?v=1638533030&width=200&height=200",
            content: `Free Castor Wheels`,
            imageUrl: "",
            price: `£900`,
          },
          {
            iconUrl:
              "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/feets-01.png?v=1638533030&width=200&height=200",
            content: `Chrome Gliders `,
            imageUrl: "",
            price: `£900`,
          },
        ],
        bedMatters: [
          {
            content: `(2' x 6'3")- Single`,
            iconUrl:
              "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/3_images.png?v=1643461854&width=200&height=200",
            imageUrl: "",
            price: `£900`,
          },
          {
            content: `(3' x 6'3")- Single`,
            iconUrl:
              "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/2_Pocket_Tinsel_Top_Mattres.png?v=1643459671&width=200&height=200",
            imageUrl: "",
            price: `£900`,
          },
          {
            content: `(4' x 6'3") - Small Double`,
            iconUrl:
              "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/2_Pocket_Tinsel_Top_Mattres.png?v=1643459671&width=200&height=200",
            imageUrl: "",
            price: `£900`,
          },
          {
            content: `(4'6 x 6'3") - Small Double`,
            iconUrl:
              "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/2_Pocket_Tinsel_Top_Mattres.png?v=1643459671&width=200&height=200",
            imageUrl: "",
            price: `£900`,
          },
          {
            content: `(5' x 6'6") - King`,
            iconUrl:
              "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/4image.jpg?v=1638181411&width=200&height=200",
            imageUrl: "",
            price: `£900`,
          },
          {
            content: `(6' x 6'6") - Super King`,
            iconUrl:
              "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/3image.jpg?v=1638181411&width=200&height=200",
            imageUrl: "",
            price: `£900`,
          },
        ],
      },
    ],
  },
};

const selectbedSlice = createSlice({
  name: "Select Bed",
  initialState: initialState,
  reducers: {
    setBedSize: (state, action) => {
      state.bedSize = action.payload;
    },
    setBedColor: (state, action) => {
      state.bedColor = action.payload;
    },
    setBedHeadBoard: (state, action) => {
      state.bedHeadBoard = action.payload;
    },
    setBedStorage: (state, action) => {
      state.bedStorage = action.payload;
    },
    setBedFeet: (state, action) => {
      state.bedFeet = action.payload;
    },
    setBedMatters: (state, action) => {
      state.bedMatters = action.payload;
    },
    setBedImage: (state, action) => {
      state.bedImage = action.payload;
    },
    setBedPrice: (state, action) => {
      state.bedPrice = action.payload;
    },
    setBed: (state, action) => {
      state.selectedBedData = action.payload;
    },
  },
});

export default selectbedSlice;

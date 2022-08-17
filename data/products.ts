import { SingleProductTypes } from "typings/product";

const productsPayload = {
    name: "DBZBeds Black Crushed Velvet Divan Bed With Reinforced Base",
    description: `Specifications: Variety of colours available in many different fabrics Various drawer options available Chrome Glides or castor wheel options 3 different Mattress options and 5 headboard options available Made in the UK 1-year guarantee included on a full set (not on a base alone – 30 days on a base alone) Headboard can be fitted on either side of the base for a 2 draw same side option Base height is 12” without the feet Dimensions: Single W: 90cm L: 190cm Small Double W: 120cm L: 190cm Double W: 135cm L: 190cm King Size W: 150cm L: 200cm Super King Size W: 180cm L: 200cm'`,
    category: "Linen Fabric DivanBeds",
    options: {
        bedSize: [
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
            {
                content: `(3' x 6'3")- Single`,
                iconUrl:
                    "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/3ft_Single.jpg?v=1637690357&width=200&height=200",
                imageUrl: "/product/color3ft/greylinen.png",
                price: `£129 `,
                size: 3,
                bedColor: [
                    {
                        iconUrl:
                            "https://www.bedsdivans.co.uk/wp-content/uploads/2021/01/blue-plush-velvet-150x150.jpg",
                        content: "blue plush",
                        imageUrl: "/product/color3ft/blueplush.png",
                        price: `£900`,
                    },
                    {
                        iconUrl:
                            "https://www.bedsdivans.co.uk/wp-content/uploads/2021/01/index-150x150.png",
                        content: "grey linen",
                        imageUrl: "/product/color3ft/greylinen.png",
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
                    {
                        iconUrl:
                            "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/floor-standing-headboard-icon-02.png?v=1641389356&width=200&height=200",
                        content: "first headboard 1",
                        imageUrl: "",
                        price: `£900`,
                    },
                    {
                        iconUrl:
                            "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/floor-standing-headboard-icon-02.png?v=1641389356&width=200&height=200",
                        content: "new headboard 1",
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
            {
                content: `(4' x 6'3") - Small Double`,
                iconUrl:
                    "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/4ft_Single.jpg?v=1637690357&width=200&height=200",
                imageUrl: "/product/color4ft/greylinen.png",
                price: `£600`,
                size: 4,
                bedColor: [
                    {
                        iconUrl:
                            "https://www.bedsdivans.co.uk/wp-content/uploads/2021/01/blue-plush-velvet-150x150.jpg",
                        content: "blue plush",
                        imageUrl: "/product/color4ft/blueplush.png",
                        price: `£900`,
                    },
                    {
                        iconUrl:
                            "https://www.bedsdivans.co.uk/wp-content/uploads/2021/01/index-150x150.png",
                        content: "grey linen",
                        imageUrl: "/product/color4ft/greylinen.png",
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
            {
                content: `(4' x 6'3") - Double`,
                iconUrl:
                    "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/4ft_Single.jpg?v=1637690357&width=200&height=200",
                imageUrl: "/product/color46ft/greylinen.png",
                price: `£700`,
                bedColor: [
                    {
                        iconUrl:
                            "https://www.bedsdivans.co.uk/wp-content/uploads/2021/01/blue-plush-velvet-150x150.jpg",
                        content: "blue plush",
                        imageUrl: "/product/color46ft/blueplush.png",
                        price: `£900`,
                    },
                    {
                        iconUrl:
                            "https://www.bedsdivans.co.uk/wp-content/uploads/2021/01/index-150x150.png",
                        content: "grey linen",
                        imageUrl: "/product/color46ft/greylinen.png",
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
            {
                content: `(5' x 6'6") - King`,
                iconUrl:
                    "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/5ft_Single.jpg?v=1637690357&width=200&height=200",
                imageUrl: "/product/color5ft/greylinen.png",
                price: `£800`,
                size: 5,
                bedColor: [
                    {
                        iconUrl:
                            "https://www.bedsdivans.co.uk/wp-content/uploads/2021/01/blue-plush-velvet-150x150.jpg",
                        content: "blue plush",
                        imageUrl: "/product/color5ft/blueplush.png",
                        price: `£900`,
                    },
                    {
                        iconUrl:
                            "https://www.bedsdivans.co.uk/wp-content/uploads/2021/01/index-150x150.png",
                        content: "grey linen",
                        imageUrl: "/product/color5ft/greylinen.png",
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
            {
                content: `(6' x 6'6") - Super King`,
                iconUrl:
                    "https://cdn.shopify.com/s/files/1/0550/6315/0851/files/6ft_Single.jpg?v=1637690358&width=200&height=200",
                imageUrl: "/product/color6ft/greylinen.png",
                price: `£900`,
                size: 6,
                bedColor: [
                    {
                        iconUrl:
                            "https://www.bedsdivans.co.uk/wp-content/uploads/2021/01/blue-plush-velvet-150x150.jpg",
                        content: "blue plush",
                        imageUrl: "/product/color6ft/blueplush.png",
                        price: `£900`,
                    },
                    {
                        iconUrl:
                            "https://www.bedsdivans.co.uk/wp-content/uploads/2021/01/index-150x150.png",
                        content: "grey linen",
                        imageUrl: "/product/color6ft/greylinen.png",
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



    }
};


export default productsPayload;



const beds = [
    {
        size: '2 ft',
        colorImage: [{
            price: '£200',
            imageUrl: 'bedImage.png',
        }],
        matters: [{}],
        feet: [{}],
        storage: [{}],
        headBoard: [{}],
    },
    {
        size: '3 ft',
        colorImage: [{}],
        matters: [{}],
        feet: [{}],
        storage: [{}],
        headBoard: [{}],
    },
]

// const forCart = 


export const dataShould = [
    {
        id: "f1b18ae7e6e1fe44",
        name: "Product One",
        description: "Small description for product",
        categories: ["writing", "bestseller"],
        quantity: 1,
        price: 98.9,
        size: 2,
        options: {
            image: "images/All-beds.png",
            color: "grey light",
            headBoard: "no",
            storage: "single",
            feet: "no",
            matters: "no",
        },
    },
    {
        id: "f1b18ae7e6e1fe44",
        name: "Product One",
        description: "Small description for product",
        categories: ["writing", "bestseller"],
        quantity: 1,
        price: 98.9,
        size: 3,
        options: {
            image: "images/All-beds.png",
            color: "grey light",
            headBoard: "no",
            storage: "single",
            feet: "no",
            matters: "no",
        },
    },
    {
        id: "f1b18ae7e6e1fe44",
        name: "Product One",
        description: "Small description for product",
        categories: ["writing", "bestseller"],
        quantity: 1,
        price: 98.9,
        size: 4,
        options: {
            image: "images/All-beds.png",
            color: "grey light",
            headBoard: "no",
            storage: "single",
            feet: "no",
            matters: "no",
        },
    },

]


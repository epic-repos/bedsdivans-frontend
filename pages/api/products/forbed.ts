import productsPayload from "data/products";
import { NextApiRequest, NextApiResponse } from "next";


async function forBeds(req: NextApiRequest, res: NextApiResponse) {
    try {
        res.status(200).json(productsPayload)
    } catch (err) {
        res.json({ success: false, data: "Server Error" });
    }
}


export default forBeds;
import React from "react";
import style from "styles/product/cart.module.scss";
import Image from "next/image";
import DeleteIcon from "icons/delete";
const CartPage = () => {
  return (
    <div className={style.containers}>
      <h1>Shopping Cart</h1>
      <hr></hr>
      <div className={style.container}>
        <div className={style.itemdetails}>
          <table className={style.table1}>
            <tbody className={style.tbody1}>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>

              <tr>
                <td>
                  <div className={style.products}>
                    <div className={style.productsimage}>
                      <img src="/img/gk.jpg" alt="img" width={67} height={50} />
                    </div>
                    <div className={style.productdetails}>
                      <div className={style.productname}>
                        Side Opening Storage Ottoman Mocha Linen CLEARANCE DEAL
                      </div>
                      <div className={style.productsize}>Size: 3ft Single</div>
                      <div className={style.deliverttime}>
                        Estimated Delivery: 17/08/2022 - 24/08/2022
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={style.price}>
                    <div className={style.price1}>£325.00</div>
                    <div className={style.price2}>-£187.00</div>
                    <div>£138.00</div>
                  </div>
                </td>
                <td>
                  <div className={style.qty}>
                    <input type="number" className={style.quantityinput} />
                  </div>
                </td>

                <td>
                  <div className={style.total}>£276.00</div>
                </td>
                <td>
                  <DeleteIcon />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={style.right}>
          <div className={style.itemprice}>
            <div>2 items</div>
            <div>£276.00</div>
          </div>
          <div className={style.totalprice}>
            <div>Total </div>
            <div>£276.00</div>
          </div>
          <div className={style.estimateddeliverytime}>
            Estimated Delivery : 17/08/2022 - 24/08/2022
          </div>
          <div className={style.promocodesection}>
            <div className={style.promocodesection1}>
              <div>
                <DeleteIcon />
              </div>
              <div className={style.promocodesection2}>
                <input type="text" className={style.vouchertext} />
                <span className={style.addbotton}> Add </span>
              </div>
            </div>
          </div>
          <div className={style.checkout}>
            <span className={style.checkoutbtn}>Proceed to checkout</span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

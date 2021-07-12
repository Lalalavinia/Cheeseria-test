import React from "react";
import { CartItemType } from "../../App";
import { Wrapper } from "./PurchasedHistory.styles";

type Props ={
    purchaseList: CartItemType[];
    totalNumber:number;
};

const PurchaseHistory: React.FC<Props> = ({purchaseList,totalNumber}) => {
    let total = 0 ;
  return (
    <Wrapper>
      <div>
        {purchaseList.map(item=>{
             total += item.amount * item.price;
             return (
               <div>
                 <p>Name:{item.title}</p>
                 <p>Amount:{item.amount}</p>
                 <p>Price:{item.price}</p>
               </div>
             );
        })}
        <h3>Total : <strong>{total.toFixed(2)}</strong></h3>
        <h3>Items: {totalNumber}</h3>
      </div>
    </Wrapper>
  );
};

export default PurchaseHistory;

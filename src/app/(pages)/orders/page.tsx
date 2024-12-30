import OrdersTable from "@/app/components/table/OrdersTable";
import { Order } from "@/app/types";
import { getOrders } from "@/app/utils/api";
import React from "react";

const Orders =async () => {
  const order:Order[]=await getOrders();

  return (
    <div>
      <h1 className="title">Siparişler</h1>
     
     <OrdersTable orders={order}/>
    </div>
  );
};

export default Orders;

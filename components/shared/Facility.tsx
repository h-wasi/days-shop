import React from "react";
import Feature from "./Feature";

function Facility() {
  return (
    <section className="flex justify-around">
      <div className="flex justify-between gap-20">
        <Feature
          img="/assets/delivery-truck.svg"
          title={"FREE AND FAST DELIVERY"}
          content={"Free delivery for all orders over $140"}
        />
        <Feature
          img="/assets/customer-service.svg"
          title={"24/7 CUSTOMER SERVICE"}
          content={"Friendly 24/7 customer support"}
        />
        <Feature
          img="/assets/shield-check.svg"
          title={"MONEY BACK GUARANTEE"}
          content={"We reurn money within 30 days"}
        />
      </div>
    </section>
  );
}

export default Facility;

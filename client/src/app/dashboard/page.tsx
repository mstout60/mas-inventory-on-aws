"use client";

import CardExpenseSummary from "./card-expense-summary";
import CardPopularProducts from "./card-popular-products";
import CardPurchaseSummary from "./card-purchase-summary";
import CardSalesSummary from "./card-sales-summary";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
    </div>
  );
};

export default Dashboard;

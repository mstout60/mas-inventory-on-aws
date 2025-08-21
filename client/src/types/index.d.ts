import {
  ExpenseByCategory,
  ExpenseSummary,
  Products,
  PurchaseSummary,
  SalesSummary,
} from "@prisma/client";

// Types
declare type DashboardMetrics = {
  popularProducts: Products[];
  salesSummary: SalesSummary[];
  purchaseSummary: PurchaseSummary[];
  expenseSummary: ExpenseSummary[];
  expenseByCategorySummary: ExpenseByCategory[];
};

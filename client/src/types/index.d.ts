import {
  ExpenseByCategory,
  ExpenseSummary,
  Products,
  PurchaseSummary,
  SalesSummary,
} from "@prisma/client";

// Interface
interface ExpenseByCategorySummary {
  expenseByCategorySummaryId: string;
  category: string;
  amount: string;
  date: string;
}

// Types
declare type DashboardMetrics = {
  popularProducts: Products[];
  salesSummary: SalesSummary[];
  purchaseSummary: PurchaseSummary[];
  expenseSummary: ExpenseSummary[];
  expenseByCategorySummary: ExpenseByCategorySummary[];
};

declare type ExpenseSums = {
  [category: string]: number;
};

declare type Products = Products[];

declare type Product = Products;

declare type NewProduct = Omit<Products, "productId">;

declare type ProductFormData = NewProduct;

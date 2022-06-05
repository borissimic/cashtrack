export type TExpense = {
  id: number;
  category: string;
  name: string;
  price: number;
  date: any;
};

export class Expense {
  id: number;
  category: string;
  name: string;
  price: number;
  date: any;

  constructor(expense: TExpense) {
    this.id = expense.id;
    this.category = expense.category;
    this.name = expense.name;
    this.price = expense.price;
    this.date = expense.date;
  }
}

export type TExpense = {
  id: number;
  description: string;
  category: string;
  value: number;
  date: any;
};

export class Expense {
  id: number;
  description: string;
  category: string;
  value: number;
  date: any;

  constructor(expense: TExpense) {
    this.id = expense.id;
    this.description = expense.description;
    this.category = expense.category;
    this.value = expense.value;
    this.date = expense.date;
  }
}

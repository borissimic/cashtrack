export type TExpenseType = {
  type: "FOOD" | "UTILITES" | "TRANSPORT" | "CLOTHINHG" | "OTHER";
};

export type TExpense = {
  id: number;
  description: string;
  value: number;
  date: string;
  type: TExpenseType;
};

export class Expense {
  id: number;
  description: string;
  value: number;
  date: string;
  type: TExpenseType;

  constructor(expense: TExpense) {
    this.id = expense.id;
    this.description = expense.description;
    this.type = expense.type;
    this.value = expense.value;
    this.date = expense.date;
  }
}

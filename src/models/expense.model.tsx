export type TExpense = {
  id: number;
  description: string;
  type: "FOOD" | "UTILITIES" | "TRANSPORT" | "CLOTHING" | "OTHER";
  value: number;
  date: any;
};

export class Expense {
  id: number;
  description: string;
  type: "FOOD" | "UTILITIES" | "TRANSPORT" | "CLOTHING" | "OTHER";
  value: number;
  date: any;

  constructor(expense: TExpense) {
    this.id = expense.id;
    this.description = expense.description;
    this.type = expense.type;
    this.value = expense.value;
    this.date = expense.date;
  }
}

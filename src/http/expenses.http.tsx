import axios from "axios";
import { BASE_API_URL } from "constants/api.constants";
import { Expense, TExpense } from "models/expense.model";
import HttpClient from "./generic.http";

class ExpensesHttp extends HttpClient {
  constructor() {
    super(BASE_API_URL);
  }

  // public async getExpenses(query = ""): Promise<Expense[]> {
  //   const { data } = await axios.get(this.url("/expenses"));

  //   const expenses: Expense[] = data.map(
  //     (expense: TExpense) => new Expense(expense)
  //   );
  //   return expenses.filter(({ category }) =>
  //     formatSearchQuery(fullName).includes(formatSearchQuery(query))
  //   );
  // }
  public async getExpense(id: number): Promise<Expense> {
    const { data } = await axios.get(this.url(`/expenses/${id}`));

    return new Expense(data);
  }
  public async createExpense(expense: TExpense): Promise<Expense> {
    const { data } = await axios.post(this.url(`/expenses`), expense);

    return new Expense(data);
  }
  // public async replaceContact({ id, ...contact }: TContact): Promise<Contact> {
  //   const { data } = await axios.put(this.url(`/contacts/${id}`), contact);

  //   return new Contact(data);
  // }

  public async updateContact(id: number, body: any): Promise<Expense> {
    const { data } = await axios.patch(this.url(`/expenses/${id}`), body);

    return new Expense(data);
  }
  public async deleteContact(id: number): Promise<Object> {
    const { data } = await axios.delete(this.url(`/expenses/${id}`));

    return data;
  }
}
export default ExpensesHttp;

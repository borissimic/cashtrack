abstract class HttpClient {
  private _baseUrl: string;

  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  protected url(url: string): string {
    return `${this._baseUrl}${url}`;
  }
}

export default HttpClient;

import { DEFAULT_ERRORS } from "constants/errors.constants";

export function buildUrlParams(obj: any): URLSearchParams {
  const params = new URLSearchParams();

  for (const key in obj) {
    const param = obj[key];
    if (param !== "" && param !== undefined) {
      params.append(key, param);
    }
  }
  return params;
}

export function parseUrlParamas(query: any): any {
  const params = new URLSearchParams(query);
  const result: any = {};

  for (const [key, value] of params) {
    result[key] = value;
  }
  return result;
}

export function createClass(obj: any, rest?: string): string {
  const classes = Object.keys(obj)
    .filter((key) => obj[key])
    .map((key) => key)
    .join(" ");

  return `${classes} ${rest}`;
}

export function validators(obj: any): any {
  const result = Object.keys(obj).reduce((acc: any, key: string) => {
    const validator = {
      value: obj[key],
      message: DEFAULT_ERRORS[key] || key,
    };
    return { ...acc, [key]: validator };
  }, {});

  console.log(result);

  return result;
}

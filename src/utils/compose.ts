const compose = (...funcs: any) => (a: any) =>
  funcs.reverse().reduce((result: any, func: any) => func(result), a);

export default compose;

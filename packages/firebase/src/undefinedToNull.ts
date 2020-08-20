export const convertUndefinedPropsToNull = (obj: any): any => {
  if (obj == null) {
    return null;
  }

  if (Array.isArray(obj)) {
    return obj.map(el => convertUndefinedPropsToNull(el));
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).reduce((newObj, key) => ({ ...newObj, [key]: convertUndefinedPropsToNull(obj[key]) }), {});
  }

  return obj;
}

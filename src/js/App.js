/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
export default function orderByProps(obj, arrProperties) {
  const arrSortProp = [];
  const arrRest = Object.keys(obj);
  arrProperties.forEach((element) => {
    for (const prop in obj) {
      if (prop === element) {
        arrSortProp.push({ key: prop, value: obj[prop] });
        arrRest.splice(arrRest.indexOf(element), 1);
      }
    }
  });
  arrRest.sort();
  arrRest.forEach((item) => {
    arrSortProp.push({ key: item, value: obj[item] });
  });
  return arrSortProp;
}

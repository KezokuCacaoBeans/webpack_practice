// export default function () {
//     console.log('this is module');
// }
export default () => {
    const obj = { a: 1, b: 2 };
    const newObj = { ...obj, c: 3 };
    console.log(newObj);
    console.log('this is module');
}
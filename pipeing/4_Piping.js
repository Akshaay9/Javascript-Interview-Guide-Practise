// https://itnext.io/write-better-javascript-function-composition-with-pipe-and-compose-93cc39ab16ee

// instead of writing  
// const discount = normalizePrice(divide100(multiply20(200))); // 40.00

// we use compose and pipe for better readability

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);
const addPrefix = (price) => "$" + String(price);

const pipe = (...fns) => {
    return (...args) =>
        fns.reduce((res, fn) => fn(res), args);
}

const compose = (...fns) => {
    return (x) =>
        fns.reduceRight((res, fn) => fn(res), x);
}


const discountPipe = pipe(multiply20, divide100, normalizePrice, addPrefix);
const discountCompose = compose(
    addPrefix,
    normalizePrice,
    divide100,
    multiply20
);

discountPipe(200); // '$40.00'
discountCompose(200); // '$40.00'


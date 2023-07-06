
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0)

const findMin = (...numbers) => Math.min(...numbers);

const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 }
}

const doubleAndReturnArgs = (arr, ...args ) => {
    const doubleArgs = args.map(num => num * 2);
    return [...arr, ...doubleArgs];
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (arr) =>{
    let i = Math.floor(Math.random() * arr.length);
    return [...arr.slice(0, i), ...arr.slice(i + 1)]
};


/** Return a new array with every item in array1 and array2. */


const extend = (array1, array2) => {
    const newArr = [...array1, ...array2];
    return newArr;
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj
}



/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = {
        ... obj
    };
    delete newObj[key];
    return newObj;
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 }
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    return {...obj, [key]:val};
}
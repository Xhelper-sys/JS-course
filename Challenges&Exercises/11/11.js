//11a.
const nums = [10,20,30];
nums[2] = 99;
console.log(nums);

//11b.
function getLastValue(array) {
    return array[array.length - 1];
};
console.log(getLastValue([2,3,4,5,1]));

//11c.
function arraySwap(array) {
    if (array.length === 0 || array.length === 1) {
        return array;
    } else {
        let lastValue = getLastValue(array);
        array[array.length - 1] = array[0];
        array[0] = lastValue;
        return array;
    };
};
console.log(arraySwap([6,7,8,9,0]));

// 11d.
for (let i = 0; i <= 10; i = i + 2){
    console.log(i);
};

//11e.
for (let i = 5; i >= 0; i--) {
    console.log(i);
}

//11f.
let i = 0;
while (i <=10) {
    console.log(i);
    i=i+2;
};

i = 5;
do {
    console.log(i);
    i--;
} while(i >= 0);

//11g.
const tab = [1,2,3,4,5,6];
for (let i = 0; i < tab.length; i++) {
    tab[i] += 1;
};
console.log(tab);

//11h.
function addOne(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] += 1;
    };
    return array;
};
console.log(addOne([-1,-6,1,2,8]));

//11i;
function addNum(array, nums) {
    for (let i = 0; i < array.length; i++) {
        array[i] += nums;
    };
    return array;
};
console.log(addNum([1,2,3,4,5,6], 4))

//11j.
function addArrays(array1, array2) {
    if (array1.length != array2.length) {
        return `Impossible de les fusionner array1 n'a pas la meme longeur que array2 ${array1.length} != ${array2.length}`;
    };
    const array12 = [];
    for (let i = 0; i < array1.length; i++) {
        array12[i] = array1[i] + array2[i];
    };
    return array12;
};
console.log(addArrays([1,2,3], [1,2,3]));

//11k.
function countPositive(nums){
    let numPositive = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            numPositive++;
        };
    };
    return numPositive;
};
console.log(countPositive([1,-6,6,-7,-8]));

//11l. 11m.
function minMax(nums) {
    let answer = {};
    if (nums.length === 0) {
        return {min: null, max:null};
    } else {
        let number_min = nums[0];
        let number_max = nums[0];
        for (let i = 0; i < nums.length; i++) {
            if(number_min > nums[i]) {
                number_min = nums[i];
            };
            if (number_max < nums[i]) {
                number_max = number_max;
            };
        };
        answer.min = number_min;
        answer.max = number_max;
        return answer;
    };
};

console.log(minMax([3,2,1,-4,-9,1,2]));
console.log(minMax([]));

//11n.
function countWords(words) {
    if (words.length === 0) {
        return null;
    };
    const wordsObject = {}
    for (let i = 0; i < words.length; i++) {
        if (wordsObject[words[i]] === undefined) {
            wordsObject[words[i]] = 1;
        } else {
            wordsObject[words[i]] += 1;
        };
    };
    return wordsObject;
};

console.log(countWords(['hello', 'hello', 'hello', 'world']));
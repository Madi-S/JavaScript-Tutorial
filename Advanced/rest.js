function sum1(a, b) {
    return a + b
}

const nums = [1, 43, 91, 5, 8, 3]
console.log(sum1(...nums))  // Returns only 44 (sum of two first numbers)


// Rest operator:
function sum2(a, b, ...nums) {
    console.log(nums)
    return a + b + nums.reduce((acc, i) => acc + i, 0)
}

console.log(sum2(...nums))  // Returns 151

// const a = nums[0]
// const b = nums[1]
const [a, b, ...otherNums] = nums

console.log(a, b, otherNums)

const person = {
    age: 35,
    name: 'John',
    sport: 'Tennis',
    location: 'Germany'
}

const {age, name, ...data} = person
console.log(age, name, data)
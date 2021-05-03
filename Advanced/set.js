const set = new Set([20, 1, 1, 2, 3, 5, 8, 2, 2, 3, 3, 8, 3, 3, 1, 2, 2])
console.log(set)
// Set(6) { 20, 1, 2, 3, 5, 8 }
// Unsorted array with non-repeating values

set.add(30).add(15).add(30).add(1).add(9)
console.log(set)
// Set(9) { 20, 1, 2, 3, 5, 8, 30, 15, 9 }

set.has(20) ? console.log('20 exists') : console.log('20 does not exist')

console.log(set.delete(1))
console.log(set.size)
// set.clear()

console.log(set.values())
console.log(set.keys())
console.log(set.entries())
// [Set Iterator] { 20, 2, 3, 5, 8, 30, 15, 9 }
// [Set Iterator] { 20, 2, 3, 5, 8, 30, 15, 9 }
// This methods exist so both map and set can synchronize

for (let num of set) {
    console.log(num)
}

function getUniqueValues(array) {
    return [...new Set(array)]
}

console.log(getUniqueValues([2, 2, 3, 3, 3, 3, 5, 2, 2, 5, 5, 5]))
// [ 2, 3, 5 ]

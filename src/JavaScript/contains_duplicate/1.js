function containsDuplicate(nums) {
  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      if (nums[a] === nums[b])
        return true
    }
  }
  return false
}

console.log(containsDuplicate([1, 2, 3, 1]))
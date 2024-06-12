/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var key in nums){
        var f=target-nums[key];
        var a=nums.indexOf(f,Number(key)+1);
        if(a!=-1){
            return [Number(key),a];
        }
    }
};

console.log(twoSum([3,2,4],6));
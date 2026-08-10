var maxSubArray = function(nums) {
    let target = 0;
    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        target = target + nums[i];

        if (target > max) {
            max = target;
        }

        if (target < 0) {
            target = 0;
        }
    }

    return max;
};
function twoSum(nums: number[], target: number): number[] {
    const map = {};
    nums.forEach((v, i) => (map[target - v] = i));
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] !== undefined && map[nums[i]] !== i)
            return [i, map[nums[i]]];
    }
};
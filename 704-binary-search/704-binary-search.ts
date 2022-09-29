function search(nums: number[], target: number): number {
    let l = 0, r = nums.length - 1;
    while(l<=r){
        const v = nums[Math.trunc(r - l / 2)];
        if(v === target){
            return Math.trunc(r - l / 2);
        }
        if(v > target){
           r = Math.trunc(r - l / 2) - 1; 
        }
        if(v < target){
            l = Math.trunc(r - l / 2) + 1;
        }
    }
    return -1;
};
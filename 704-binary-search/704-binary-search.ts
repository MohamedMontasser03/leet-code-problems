function search(nums: number[], target: number): number {
    let l = 0, r = nums.length - 1, m = 0;
    while(l<=r){
        m = Math.trunc(r - l / 2);
        const v = nums[m];
        if(v === target){
            return m;
        }
        if(v > target){
           r = m - 1; 
        }
        if(v < target){
            l = m + 1;
        }
    }
    return -1;
};
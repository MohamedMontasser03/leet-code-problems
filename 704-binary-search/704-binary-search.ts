function search(a: number[], m: number): number {
    let lp = 0, rp = a.length - 1;
    while(rp >= lp){
        const i = Math.round((lp+rp)/2);
        if(a[i] === m) return i;
        else if(a[i] > m) rp = i - 1;
        else if(a[i] < m) lp = i + 1;
    }
    return -1;
};
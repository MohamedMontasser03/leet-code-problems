1. Create a map where the keys are the number needed to reach the given value and the value of the map is the index `(v, i) => map[n - v] = i`
2. Loop through the array one more time looking for the value you have in that map if you find it you return your current index with the index in the map

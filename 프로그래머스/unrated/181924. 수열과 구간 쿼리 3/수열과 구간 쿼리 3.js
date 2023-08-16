function solution(arr, queries) {
    queries.map((item, i)=>{
        let temp = arr[queries[i][0]];
        arr[queries[i][0]] = arr[queries[i][1]];
        arr[queries[i][1]] = temp;
    })
    return arr;
}
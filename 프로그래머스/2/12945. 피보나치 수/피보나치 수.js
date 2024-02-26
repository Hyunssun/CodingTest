function solution(n) {
    var answer = 0;
    let arr=[]
    for(let i=0; i<=n; i++){
        if(arr.length>1){
            arr.push(arr[i-1]%1234567+arr[i-2]%1234567)
        }else{
            arr.push(i)
        }
    }
    answer = arr[arr.length-1]%1234567;
    return answer;
}
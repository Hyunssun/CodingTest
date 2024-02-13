function solution(k, score) {
    var answer = [];
    let arr=[];
    score.map((item,index)=>{
        if(arr.length>=k){
            if(arr[0]<=item){
                arr[0]=item;
                arr.sort((a,b)=>a-b)
            }
            answer.push(arr[0])
        }else{
            arr.push(item)
            arr.sort((a,b)=>a-b)
            answer.push(arr[0])
        }
    })
    return answer;
}
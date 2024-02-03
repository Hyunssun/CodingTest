function solution(array, commands) {
    var answer = [];
    commands.map((item)=>{
        let arr=array.slice(item[0]-1,item[1]);
        arr.sort((a,b)=>a-b);
        answer.push(arr[item[2]-1]);
    })
    return answer;
}
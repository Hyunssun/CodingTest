function solution(my_string, queries) {
    let answer = '';
    let arr = my_string.split('');
    queries.map((item)=>{
        let arr2=[];
        for(let i=item[1]; i>=item[0] ; i--){
            arr2.push(arr[i])
        }
        arr.splice(item[0],item[1]-item[0]+1, ...arr2)
    })
    answer = arr.join('')
    return answer;
}
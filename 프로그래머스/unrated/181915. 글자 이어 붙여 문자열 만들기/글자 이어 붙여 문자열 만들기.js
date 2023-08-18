function solution(my_string, index_list) {
    var answer = '';
    index_list.map((item)=>{
        answer += my_string[item]
    })
    return answer;
}
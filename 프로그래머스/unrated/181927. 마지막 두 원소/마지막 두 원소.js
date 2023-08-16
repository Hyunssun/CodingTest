function solution(num_list) {
    let arr = num_list;
    let last = num_list[num_list.length - 1];
    let last_1 = num_list[num_list.length - 2];
    last > last_1 ? arr.push(last - last_1) : arr.push(last * 2)
    return arr;
}
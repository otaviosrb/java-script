function soma(...valores){
    let res = 0
    for(let i of valores){
        res += i
    }
    return res
}

console.log(soma(10,5,20))
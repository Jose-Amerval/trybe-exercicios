function indiceDoMaior(inteiros) {
    let indexMaior = 0;
    for (let index in inteiros) {
        if(inteiros[indexMaior] < inteiros[index]) {
            indexMaior = index;
        }
   
    }
    return indexMaior
}
console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));
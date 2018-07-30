function produceDrivingRange(blockRange){
  return function(beg, end){
    let b = parseInt(beg)
    let e = parseInt(end)
    return e - b > 10 ? `${e - b} blocks out of range` : `within range ${e - b}`
  }

  eightBlockRange('10th', '20th')
}

class ProduceTipCalculator{


}

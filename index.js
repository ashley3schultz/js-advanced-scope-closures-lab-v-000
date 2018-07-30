function produceDrivingRange(blockRange){
  return function(beg, end){
    let b = parseInt(beg)
    let e = parseInt(end)
    return e - b ? `${b - e} blocks out of range` : `within range ${10 - blockRange}`
  }

  eightBlockRange('10th', '20th')
}

class ProduceTipCalculator{


}

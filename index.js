function produceDrivingRange(rng){
  return function(beg, end){
    let b = parseInt(beg)
    let e = parseInt(end)
    return (e - b) > rng ? `${e - b} blocks out of range` : `within range by ${e - b}`
  }

  eightBlockRange('10th', '20th')
}

class ProduceTipCalculator{


}

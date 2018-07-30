function produceDrivingRange(rng){
  return function(beg, end){
    let b = parseInt(beg)
    let e = parseInt(end)
    return (e - b) > rng ? `${(e - b)-rng} blocks out of range` : `within range by ${rng-(e - b)}`
  }

  eightBlockRange('10th', '20th')
}

class ProduceTipCalculator{


}

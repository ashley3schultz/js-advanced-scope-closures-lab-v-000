function produceDrivingRange(blockRange){
  return function(){
    return blockRange > 10 ? `${blockRange - 10} blocks out of range` : `within range ${10 - blockRange}`
  }
}

class ProduceTipCalculator{


}

function produceDrivingRange(blockRange){
  return function(){
    return blockRange > 10 ? `${10 - blockRange} blocks out of range` : `within range by ${blockRange - 10}`
  }
}

class ProduceTipCalculator{


}

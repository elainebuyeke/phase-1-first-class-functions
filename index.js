function receivesAFunction(callback) {
    callback()
  }
  
  function returnsANamedFunction() {
    return function named() {
      console.log("I am Elaine.")
    }
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('Apparently anonymous.')
    }
  }
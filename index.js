function receivesAFunction(otherFunction) {
    return otherFunction();
}

function returnsANamedFunction() {
    
    return function cat() {return 'dog';}
}

function returnsAnAnonymousFunction() {
    return (function() {return 7;})
}
export function createFunction(){
    console.log("hello");
    //return () => { return "hello"};
}

export function createFunctionPrinter(input){
    return function(){console.log(input)};
}


export function outer(){
    var counter = 0; // this variable is outside incrementCounter's scope

    function incrementCounter () {
      counter ++;
      console.log(counter);
    }
    return incrementCounter;
  }


export function addByX(x){
    return (input) => {return input + x};
}

export function once(cb){
    let counter = 1;
    let output  = 0;

    return (input) => {
        if(counter == 1){
            output = cb(input);
            counter++;
            return output;
        }
        else
            return output;

    };
}

export function after(count,func){
    return () => {
        count > 0 ? count-- : null;
        if(count == 0)
            return func();
        else
            return ()=>{};
    };
}


export function delay(func,wait){
    let arg = null;
    if(arguments.length > 2){
        arg = arguments.slice(1,arguemnts.length);
    }
    setTimeout(()=>fn(arg),wait);
}

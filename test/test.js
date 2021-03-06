const chai = require('chai');
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
import  {
        addTwo,addS,map,forEach,
        mapWith,reduce,intersection,
        union,objectOfMatches,multiMap
        } from '../src/callBackAndHighOrderFunctions';
import {createFunction,createFunctionPrinter,outer, addByX, once,after} from '../src/Closures Scope and Execution Context';


chai.use(sinonChai);

describe('CallBack and High Order Functions',function(){
    describe("Challange 1: function addTwo accepts one input and adds 2 to it.",function(){
            it('expect 2+1 = 3',function(){
                //Arrange
                const param = 1;
                const sum =  param + 2;

                //ACT
                const result = addTwo(param);

                //ASSERT
                expect(result).to.be.equal(4);
            });
    });

    describe("Challange 2: a function addS that accepts one input and adds an 'S' to it.",function(){
        it('pizza should be pizzas',function(){
             //Arrange
             const initial = "pizza";

            //Act
            const result = addS(initial);

            //ASSERT
            expect(result).to.equal('pizzas');

        })
    });

    describe(`Challange 3: a function called map takes an array of numbers and
            a callback function which is applied to each element of the array.
            map returns a new array with the result of using the callback on each element`,function(){

                it('returned array is a new array',function(){
                    //Arrange
                    const param1 = [];
                    const  multiplyBy2 = (num) => num * 2;

                    //ACT
                    const result = map(param1,multiplyBy2);

                    //ASSERT
                    expect(result).to.not.equal(param1);

                });

                it('input of [1,2,3,4,5] should be [2,4,6,8,10] when the callback is multiplyByTwo',function(){
                    //Arrange
                    const param = [1,2,3,4,5];
                    const multiplyBy2 = (num) => num * 2;

                     //ACT
                     const result = map(param,multiplyBy2);

                     //ASSERT
                     expect(result).to.be.eql([2,4,6,8,10]);
                });
            });

    describe(`Challange 4:The function forEach takes an array and a callback,
                and runs the callback on each element of the array.
                forEach does not return anything.`,function(){
                    it(`input of [a,b,c,d] should be 'abcd'`,function(){

                        //Arrange
                        let param = ['a','b','c','d'];
                        var result = "";
                        let cb = (val) => {result= result + val};

                        //Act
                        forEach(param,cb);

                        //ASSERT
                        expect(result).to.be.equal('abcd');
                    })
                });


    describe(`Extension 1: rebuild map as mapWith. This time you're going to use
        forEach inside of mapWith instead of using a for loop.`,function(){
            it('result array is a new array',function(){
                //ARRANGE
                const param1 = [];
                const multiplyByTwo = (num) => {num =  num * 2};

                //ACT
                const result = mapWith(param1,multiplyByTwo);
                //ASSERT
                expect(result).to.not.equal(param1); // strict equal ; memory reference
            });

            it('input of [a,b,c,d] should be abcde when the callback is multiplyByTwo',function(){
                //ARRANGE
                const param1 = [{val:'a'},{val:'b'},{val:'c'},{val:'d'}];
                const cb = (obj) => {
                    obj.val = obj.val + 's';
                };
                //ACT
                const result = mapWith(param1,cb);
                //ASSERT
                expect(result).to.eql([{val:'as'},{val:'bs'},{val:'cs'},{val:'ds'}]); // deep equal values
            })
        });


    describe(`Extension 2 :The function reduce takes an array and reduces the elements to a single value.
            For example it can sum all the numbers, multiply them,
            or any operation that you can put into a function.`,function(){

                    it('must have an initial value',function(){
                        //ARRANGE
                            const arr = [1,2,3,4];
                            const cb = (num) =>{return num*2};

                        //ACT & ASSERT
                        expect(() => reduce(arr,cb)).to.throw(Error,"initial value not defined");
                    });

                    it('[1,2,3] should be reduced to 6 by using a sum function',function(){
                        //ARRANGE
                        const arr = [1,2,3];
                        const initialValue = 0;
                        const cb = (a,b) => {return a+b; }
                        //ACT
                        const result = reduce(arr,cb,initialValue);
                        //ASSERT
                        expect(result).to.eql(6);
                    });
            });

    describe(`Extension 3 : Construct a function intersection that compares input arrays and returns
             a new array with elements found in all of the inputs. BONUS: Use reduce!`,function(){
                it('Intersection of [1,2,3] , [2,3,4,5] ,[1,3,2,4,5] returns [2,3]',function(){
                    //Arrange
                    const param1 = [1,2,3];
                    const param2 = [2,3,4,5];
                    const param3 = [1,3,2,4,5];
                    //ACT
                    const arr = intersection(param1,param2,param3);
                    //ASSERT
                   expect(arr).to.eql([2,3]);
                });
             });


    describe(`Extension 4: Construct a function union that compares input arrays and returns a new array that contains all elements.
              If there are duplicate elements, only add it once to the new array.
              Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!`,function(){

                    it('returned array should be a new array',function(){
                        //Arrage
                        const param1 = [];
                        //ACT
                        const result = union(param1);
                        //ASSERt
                        expect(param1).to.not.equal(result);
                    });

                    it('union of [1,2,3],[2,3,4,5] and [0,2,3] should equal [1,2,3,4,5]',function(){
                        //Arrage
                        const param1 = [1,2,3];
                        const param2 = [2,0,3,4,5];
                        const param3 = [0,2,3];
                       //ACT
                       const result  = union(param1,param2,param3);
                       //ASSERT
                       expect(result).to.be.eql([1,2,3,0,4,5]);
                   });

                    it('preservers order of the input element arrays; starting from the first element of the first input array',function(){
                         //Arrage
                        const param1 = [1,4,4];
                        const param2 = [3,4,5,0];
                        //ACT
                        const result = union(param1,param2);
                        //ASSERT
                        expect(result).to.be.eql([1,4,3,5,0]);
                    });

                    it('contains no duplicate elements',function(){
                        //Arrange
                        const param1 = [1,4,4];
                        const param2 = [2,4];
                        //ACT
                        const result  =  union(param1,param2);
                        //ASSERT
                        expect(result).to.be.eql([1,4,2]);
                    });

              });

    describe(`Extension 5 :A Function objOfMatches accepts two arrays and a callback.
             objOfMatches will build an object and return it. To build the object, objOfMatches will
             test each element of the first array using the callback to see if the output matches the corresponding element (by index)
              of the second array. If there is a match, the element from the first array becomes a key in an object,
             and the element from the second array becomes the corresponding value.`,function(){

                it(` Objectmatches when passed values [hi, howdy,bye,later,hello]} and [HI,Howdy,BYE,LATER,hello]} will return
                    { hi: 'HI', bye: 'BYE', later: 'LATER' } `,function(){
                            //ARRANGE
                            const arr1 = ['hi','howdy','bye','later','hello'];
                            const arr2 = ['HI','Howdy','BYE','LATER','hello'];


                            const cb = (val,initialValue) => {
                                const indexU = arr2.indexOf(val.toUpperCase());
                                if(indexU > -1)
                                {
                                    if((indexU > -1) && (indexU == arr1.indexOf(val))){
                                        initialValue[val] = arr2[indexU];
                                    }
                                }
                                return initialValue;
                            }
                            //ACT
                            let result = objectOfMatches(arr1,arr2,cb);
                            //ASSERT
                            expect(result).to.eql({ hi: 'HI', bye: 'BYE', later: 'LATER' })
                    });
             });

            describe(`Extension 6: a function multiMap  will accept two arrays: an array of values and an array of callbacks.
                    multiMap will return an object whose keys match the elements in the array of values.
                    The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks,
                    where the input to each callback is the key.`,function(){

                        it(`MultipMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }])
                        should return { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }`,function(){
                            //ARRANGE
                            const arr1 = ['catfood', 'glue', 'beer'];
                            const arr2 = [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }];
                            //ACT
                            const result = multiMap(arr1,arr2);
                            //ASSERT
                            expect(result).to.eql({ catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] });
                        })
                    });
});


describe('Clousers, Scope and Execution Contenxt',function(){
    beforeEach(function (){
        this.spy = sinon.spy(console,'log');
    });

    afterEach(function(){
        this.spy.restore();
    });

    describe(`Challagnge 1: Create a function createFunction that creates and returns a function.
              When that created function is called, it should print "hello".`,function(){
                it(`createFunction when called shouldprints hello`,function(){
                    //ARRANGE
                     createFunction();
                    //ACT & //ASERT
                    expect(this.spy).to.have.been.calledWith("hello");
                });
            });

    describe(`Challange 2: Create a function createFunctionPrinter that accepts
            one input and returns a function. When that created function is called,
            it should print out the input that was used when the function was created.`,function(){
                it(`createFunctionPrinter('sample') should print sample`,function(){
                    //ARRANGE
                    let fn = createFunctionPrinter('sample');
                    //ACT
                    fn();
                    //ASSERT
                    expect(this.spy).to.have.been.calledWith('sample');
                });
            });

    describe(`Challange 3: Examine the code for the outer function. Notice that we are returning a function
              and that function is using variables that are outside of its scope.
              Uncomment those lines of code. Try to deduce the output before executing.`,function(){
                    it(` calling willCounter(); willCounter(); willCounter(); jasCounter(); willCounter()
                         should log out 1 ,2 ,3 ,1 and 4 `,function(){
                            //ARRANGE
                            const willCounter = outer();
                            const jasCounter = outer();
                            //ACT
                            willCounter();
                            willCounter();
                            willCounter();
                            jasCounter();
                             willCounter();

                            //ASSERT
                             expect(this.spy.args).to.be.eql([[1],[2],[3],[1],[4]]);
                    });
              });

    describe(`challange 4:Now we are going to create a function addByX
              that returns a function that will add an input by x.`,function(){

                it(`addByTwo(1) , addByTwo(2) and addByTwo(3) should be equal 3,4,5 respectively`,function(){
                      //ARRANGE
                      const addByTwo = addByX(2);
                      //ACT & //ASSERT
                      expect(addByTwo(1)).to.be.eql(3);
                      expect(addByTwo(2)).to.be.eql(4);
                      expect(addByTwo(3)).to.be.eql(5);
                });
              });

    describe(`Challange 5: Write a function once that accepts a callback as input and
              returns a function. When the returned function is called the first time,
              it should call the callback and return that output.
              If it is called any additional times,
              instead of calling the callback again it will simply return the
              output value from the first time it was called.`,function(){
                    it(`when once(addByTwo) is called the first time is should return 6
                        after that when its called it should return 6`,function(){

                            //ARRAGE
                            let addByTwo = addByX(2);
                            let func = once(addByTwo);

                            //ACT
                            const result1 = func(2);
                            const result2 = func(4);
                            const result3 = func(6);


                            //ASSERT
                            expect(result1).to.eql(4);
                            expect(result2).to.eql(4);
                            expect(result3).to.eql(4);
                    });
        });


    describe(`Challange 6 : Write a function after that takes
              the number of times the callback needs to be called
              before being executed as the first parameter and
              the callback as the second parameter.`,function(){
                it(`console logs hello after being called 3 times`,function(){
                    //ARRANGE
                     let called = function() { console.log('hello') };

                    //ACT
                    let afterCalled = after(3,called);
                    afterCalled();
                    afterCalled();
                    afterCalled();

                    //ASSERT
                    // only once hello is passed to console log which is
                    expect(this.spy.args).to.be.eql([['hello']]);
                });
    });

    describe(`Challange 7: Write a function delay that accepts a callback as the
             first parameter and the wait in milliseconds before allowing the callback
             to be invoked as the second parameter. Any additional arguments after
             wait are provided to func when it is invoked.
             HINT: research setTimeout(); `,function(){

                // before(function (){
                //     this.clock = sinon.useFakeTimers();
                // });

                // afterEach(function(){
                //     this.clock.restore();
                // });

                // it(`dealy function call by 1000ms `,function(){
                //     this.clock.tick(1000);

                // });
            });
})

const expect = require('chai').expect;
import  {addTwo,addS,map} from '../src/callBackAndHighOrderFunctions';


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
            })

});


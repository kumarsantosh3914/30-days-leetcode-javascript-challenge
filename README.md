# Leetcode 30 days Javascript challenge

## **Day 1**

### [Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/description/?utm_campaign=PostD1&utm_medium=Post&utm_source=Post&gio_link_id=j9yDnOOo)

```
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
 ```

 ## **Day 2** 

 ### [2620. Counter](https://leetcode.com/problems/counter/description/)

 ## **When, Where, What and How to use closure!!!**

 First of all closure is not something you create it's something that the language has created for itself for appropriate development and we need to crack this code that how the language uses it.

 _**To be honest, a good developer's greatest fear is discovering that something working but not knowing how it works.**_

 ## **What is Closure ?**

- A closure is created when a function is defined inside another function, and the inner function references variables in the outer function's scope. When the inner function is returned from the outer function, it retains a reference to the outer function's scope, and can continue to access those variables even after the outer function has finished executing. Vice-Versa is not true!!
- In simple terms a closure can "**remember" values from it's outer function's scope and use them later,** even if the outer function has returned and those values would normally be out of scope.

## **When to use closure concept ?**

First let's summarize the definition as usually the definition gives the answer for when to use.

- From definition you can see that it's used for retrival of values from outer parent function so we can understand that closure can be used for retrival of dead values which have become out of scope. Also we can comprehend that it can used for privating some variables or function.
- **The closures are useful for creating private variables and functions, implementing partial function application, and preserving state in asynchronous code.**
- While writing the code whenever there is a need for these types of thing try to incorporate this closure concept i.e. In a programmer language it's called `lexical environment` 

## **Where and How to use closure concept ?**

1. **Private variables and functions:**

```
const makeCounter = () => {
    let count = 0;

    return () => {
        count++;
        console.log(count);
    }
}

let counter = makeCounter();
counter(); // logs 1
counter(); // logs 2
counter(); // logs 3
```

2.**Partial function:**

I was introduction to this concept name during development phase but was shocked that unknowingly I have used it many times. I'm sure that you all also use this:

```
function add(x) {
  return function(y) {
    return x + y;
  }
}

let add5 = add(5);
console.log(add5(3)); // 8
```
3.**Preserving states in asynchronous code:**
```
const animate = (element, from, to, duration) => {
  let start = performance.now();
  
  const update = () => {
    let time = performance.now() - start;
    let progress = time / duration;
    let value = from + (to - from) * progress;
    
    element.style.left = value + 'px';
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

let element = document.getElementById('my-element');
animate(element, 0, 100, 1000);
```

- In this example, the `animate()` function creates a closure over the `start` variable, which is used to calculate the elapsed time since the animation started
- The `update()` function also "closes over" the element, `from`, `to`, and `duration` arguments, so that it can use them to update the element's position over time.
- Thus by **creating a closure over these values, we can preserve their state between animation frames**, even though the `update()` function is called asynchronously by `requestAnimationFrame()`.


## **Answer to todays (#2) JS challenge:**

```
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
 ```
 ## **Day 3**

 ### [Counter II](https://leetcode.com/problems/counter-ii/description/)


# JavaScript-Patterns


## Creational patterns:


### 1) Constructor: it is pythonic __init__. Doing something when creating an instance of a class.

### 2) Factory: it helps creating classes by not specifying class name but parameters. For instance, Jack wants to buy a `car`, hence, factory class will take `car` as a parameter and will return an instance of Car class. Thus and so, factory alleviates creating instance of classes by just passing arguments to factory class, which will check them and provide an appropriate class instance.

### 3) Prototype: it defines a particular object's parent class / prototype.

### 4) Singleton: it helps to have a single instance of a class. When a new instance is about to be created, singleton pattern prevents it and returns an existing instance of this particular class. For instance, Database class, which will ensure that user has a single database connection


## Structural patterns


### 5) Adapter: it helps to phase-in new methods without exterminating a possibility of using old outdated methods' names. In other words, when a deprecated method is being called, adapter class catches it but does not executes it, instead it calls new method with exact same functionality. For instance, it is useful to have an adapter class when dealing with various API versions.

### 6) Decorator: it provides a possibility to execute some code when an class or function was called. For instance, to add complementary arguments or prevent function call based on some arguments.

### 7) Facade: it is similar to factory pattern but here no class instances are returned. Facade pattern helps to execute some pieces of code by passing arguments, which will be delegated by some abstract class.

### 8) Flyweight: it is similar to singleton pattern. However, multiple instances of a particular class can exist. Nevertheless, flyweight pattern helps to avoid creating instances with similar arguments by returning existing ones. For instance, caching.

### 9) Proxy: it helps to define object's behaviour when it is called or rewrite get/set methods.


## Behavioural patterns

### 10) Chain of responsibility: it provides methods chaining. In each class method return instance `this`, so that operations can be chained. For instance, like in promise .then .then .then .then ...

### 11) Iterator: it ensures that given object will be enumerable / loopable. For instance, via `generator` or `[Symbol.iterator]`.

### 13) Mediator: it provides intermediary class. This mediator class manages other classes' behaviour.

### 14) Observer: it is quite similar to mediator. This pattern also provides mediator class, which manages other classes' functionality in particular cases.

### 15) State: it allows to change object's behaviour based on some objects' states. For instance, if one object's state is changed, other object will incur some changes.

### 16) Strategy: it encapsulates alternative algorithms (or strategies) for a particular task. This pattern allows a method to be swapped out at runtime by any other method (strategy) without the client realizing it. Essentially, Strategy is a group of algorithms that are interchangeable.

### 17) Template: it defines other classes' functionality. Imagine having one parent class with pre-defined but empty methods, which will be filled with functionality by child classes. In other words, parent class pre-defines methods for child classes. 
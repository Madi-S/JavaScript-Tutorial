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
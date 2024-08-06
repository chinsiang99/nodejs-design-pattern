# nodejs-design-pattern
This repo is for me to learn nodejs design pattern in order to boost my skills in design pattern

# What are design patterns
Design patterns are reusable, reliable solutions to problems that we face every day in software development

Basically, they're and capable of:
- cataloged solutions
- reusable in many different situations
- well documented
- language for collaboration
- improve architecture

With design patteenrs, developers can:
- write better code
- become a better programmer

# Originity of Design Pattern (The Gang of Four)

## Design Pattern Essentials
- Pattern name
- The problem
- The solution
- Consequences

## Categories in Design Pattern

| Category        | Design Patterns                                                                             |
|-----------------|----------------------------------------------------------------------------------------------|
| Creational      | Abstract Factory, Builder, Factory Method, Prototype, Singleton                              |
| Structural      | Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy                              |
| Behavioral      | Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor |

### Creational Patterns
- **Abstract Factory**: Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
- **Builder**: Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
- **Factory Method**: Defines an interface for creating an object but lets subclasses alter the type of objects that will be created.
- **Prototype**: Specifies the kinds of objects to create using a prototypical instance, and creates new objects by copying this prototype.
- **Singleton**: Ensures a class has only one instance and provides a global point of access to it.

### Structural Patterns
- **Adapter**: Converts the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.
- **Bridge**: Decouples an abstraction from its implementation so that the two can vary independently.
- **Composite**: Composes objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.
- **Decorator**: Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
- **Facade**: Provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.
- **Flyweight**: Uses sharing to support large numbers of fine-grained objects efficiently.
- **Proxy**: Provides a surrogate or placeholder for another object to control access to it.

### Behavioral Patterns
- **Chain of Responsibility**: Avoids coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.
- **Command**: Encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations, and supports undoable operations.
- **Interpreter**: Given a language, defines a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.
- **Iterator**: Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
- **Mediator**: Defines an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly.
- **Memento**: Without violating encapsulation, captures and externalizes an object's internal state so that the object can be restored to this state later.
- **Observer**: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
- **State**: Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.
- **Strategy**: Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
- **Template Method**: Defines the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.
- **Visitor**: Represents an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.

# Anti-Pattern
- Modifying the prototype on an instance
- syncing execution after initialization
- callback chaos (hell)

# For the following documentation, please look at the folders created by sequence
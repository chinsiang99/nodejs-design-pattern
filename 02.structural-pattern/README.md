# Adapter Pattern

**Intent**: Convert the interface of a class into another clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces

## Key Concepts
- Adapter (Wrapper): The class that implements the target interface and makes the adaptee compatible with the target interface.
- Target Interface: The interface that the client expects.
- Adaptee: The existing class that needs to be adapted to the target interface.
- Client: The object that interacts with the adapter using the target interface.

## Structure
The adapter pattern typically involves four components:

- Client: Uses the Target interface.
- Target: Defines the domain-specific interface used by the Client.
- Adapter: Adapts the interface of Adaptee to the Target interface.
- Adaptee: Defines an existing interface that needs adapting.

# Proxy Pattern

**Intent**: Provide a surrogate or placholder for another object to control access to it

## Key Concepts
- Proxy: The class that controls access to the real subject. It implements the same interface as the real subject and forwards requests to it.
- Subject: The common interface that both the real subject and the proxy implement.
- Real Subject: The actual object that the proxy represents and controls access to.
- Client: The object that interacts with the proxy instead of the real subject.

## Structure
The proxy pattern typically involves four components:

Client: Uses the Subject interface.
Subject: Defines the common interface for RealSubject and Proxy.
RealSubject: The actual object that the proxy represents.
Proxy: Controls access to the RealSubject.

# Composite Pattern

**Intent**: Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly

The composite pattern is a structural design pattern that allows you to compose objects into tree structures to represent part-whole hierarchies. This pattern lets clients treat individual objects and compositions of objects uniformly.

## Key Concepts
- Component: The interface or abstract class that defines common operations for both simple and complex objects in the composition.
- Leaf: Represents a single object in the composition. It implements the Component interface and defines behavior for the base objects.
- Composite: Represents a group of objects (leaves or other composites). It implements the Component interface and defines behavior for operations that can be applied to child components.

## Structure
The composite pattern typically involves the following components:

- Component: An interface or abstract class declaring operations for both simple and complex objects.
- Leaf: A concrete class implementing the Component interface, representing single objects in the composition.
- Composite: A concrete class implementing the Component interface, representing groups of objects. It stores child components and implements child-related operations.
- Client: The object that manipulates the components through the Component interface.

# Decorator Pattern

**Intent**: Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality

## Key Concepts
Component: The interface or abstract class that defines the common operations for both concrete components and decorators.
Concrete Component: The class that implements the Component interface and defines the base behavior.
Decorator: An abstract class that implements the Component interface and contains a reference to a Component object. It delegates all operations to the wrapped component.
Concrete Decorators: Classes that extend the Decorator class and add new behavior before or after delegating to the wrapped component.

## Structure
The decorator pattern typically involves the following components:

Component: An interface or abstract class declaring operations.
Concrete Component: A concrete class implementing the Component interface.
Decorator: An abstract class implementing the Component interface, containing a reference to a Component object.
Concrete Decorators: Concrete classes extending the Decorator class and adding additional behavior.
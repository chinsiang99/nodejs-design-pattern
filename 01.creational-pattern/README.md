# Singleton Pattern

**Intent**: Ensure a class only has one instance, and provide a global point of access to it

For this use case, can navigate to 01.singleton folder. We can see that in the start folder, there are multiple files are utilising the logger class, but if we try to run index.js, we can see that there are multiple logger instances are being created instead of using the same instance.

In the finish folder, that is the solution for that utilising singleton pattern

## Key Goals of the Singleton Pattern
- Ensure a single instance: **Prevents the instantiation of more than one instance of a class**.
- Provide a global access point: Offers a global point of access to the instance.

## How the Singleton Pattern Works
- Private Constructor: Prevents direct instantiation from outside the class.
- Static Instance: Holds a single instance of the class.
Public Static Method: Provides a way to access the instance.

# Prototype Pattern

**Intent**: Specify the kinds of objects to create using prototypical instance, and create new objects by copying this prototype

The Prototype pattern is a creational design pattern that aims to:

- **Reduce the cost of creating objects**: Instead of creating a new instance from scratch using a constructor, the Prototype pattern allows for the **creation of new objects by copying an existing object**, known as the **prototype**. This can be more efficient, especially for objects that are expensive to create.

- **Simplify the process of object creation**: By using a prototype, you **avoid the complexities involved in creating a new object from scratch**, particularly when it involves multiple steps or complex configurations.

- **Enable runtime flexibility**: The Prototype pattern allows for the dynamic addition and removal of objects at runtime, as you can **clone existing objects and modify them without altering the code** that uses these objects.

## How the Prototype Pattern Works
- Prototype Interface: Defines a method for cloning itself. This method is often called clone or copy.
- Concrete Prototype: Implements the clone method, allowing for the duplication of itself.
- Client: Uses the prototype to create new objects by cloning existing ones.
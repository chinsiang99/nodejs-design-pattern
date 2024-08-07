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
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
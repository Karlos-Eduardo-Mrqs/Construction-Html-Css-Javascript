# [Read Part One !](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%205%20-%20Methods%20And%20Data%20Manipulation/Objects-Number-14/Manually_Objects.md)
# Methods With Objects
Methods are functions that are properties of objects. They allow objects to perform actions or behaviors related to the data they contain. Here's an overview of how to define and use methods with objects.

## Creation and Construction Methods
These methods are used to create new objects and perform operations involving object properties. They provide ways to set up prototype chains and merge object properties efficiently.

- **Object.create(proto):** Creates a new object with the specified prototype.
![image](https://github.com/user-attachments/assets/2bdd084d-59ca-468f-bf21-756ea44e62a7)

- **Object.assign(target, ...sources):** Copies all enumerable properties from one or more source objects to a target object.
![image](https://github.com/user-attachments/assets/15f0a23d-ac5a-46a1-90eb-75df67efa525)

## Access and Iteration Methods
These methods are designed to facilitate access to and iteration over the properties of JavaScript objects. They allow for efficient retrieval of property names, values, and key-value pairs, making it easier to work with objects in a variety of scenarios.

- **Object.keys(obj):** Returns an array containing all enumerable properties of the object itself (without inherited ones).
![image](https://github.com/user-attachments/assets/139f30f9-d909-49c1-b439-dea59c3e5707)

- **Object.values(obj):** Returns an array containing all the values ​​of the enumerable properties of the object itself.
![image](https://github.com/user-attachments/assets/81006bac-59c0-4e61-b444-444d2aaff062)

- **Object.entries(obj):** Returns an array of [key, value] pairs of the enumerable properties of the object itself.
![image](https://github.com/user-attachments/assets/457d16d7-04f0-43d4-8f8c-babb6b102d33)

## Definition and Configuration Methods
These methods are designed to facilitate access to and iteration over the properties of JavaScript objects. They allow for efficient retrieval of property names, values, and key-value pairs, making it easier to work with objects in a variety of scenarios.

- **Object.defineProperty(obj, prop, descriptor):** Defines a new property or modifies an existing one on an object.
![image](https://github.com/user-attachments/assets/90d89da1-cd2d-4ebe-a30b-ec37b0444aa6)

- **Object.defineProperties(obj, props):** Defines several new properties or modifies existing properties on an object.
![image](https://github.com/user-attachments/assets/89e68cd5-73c0-4239-8f8c-c9667143f4a5)

## Property Manipulation Methods
These methods are used to interact with and manipulate the properties of JavaScript objects, allowing developers to inspect and control property attributes such as enumerability, configurability, and more.

- **Object.getOwnPropertyDescriptor(obj, prop):** Returns the property descriptor for a specific property of the object.
![image](https://github.com/user-attachments/assets/40769c1d-6af7-45d4-a006-fd3aaf5e6959)

- **Object.getOwnPropertyDescriptors(obj):** Returns all the object's own property descriptors.
![image](https://github.com/user-attachments/assets/b92fa5cc-8d5d-49d2-9eb4-488e07590b48)

- **Object.hasOwnProperty(prop):** Returns a boolean indicating whether the object has the specified property as its own (not inherited).
![image](https://github.com/user-attachments/assets/8178b993-0f78-41ba-ba3d-a104b9579397)

- **Object.propertyIsEnumerable(prop):** Returns a boolean indicating whether the specified property is enumerable.
![image](https://github.com/user-attachments/assets/7615b49b-d335-4416-bb11-5ecc3e0b5a86)

## Prototyping and Inheritance Methods
Prototyping and inheritance methods in JavaScript provide ways to interact with an object's prototype, allowing developers to manage inheritance and prototype chains. 

- **Object.getPrototypeOf(obj):** Returns the prototype (internal object [[Prototype]]) of the specified object.
![image](https://github.com/user-attachments/assets/96cb885b-6a14-4cc0-a900-ff606592f024)

- **Object.setPrototypeOf(obj, proto):** Sets the prototype (internal object [[Prototype]]) of the specified object.
![image](https://github.com/user-attachments/assets/5b4e93dd-0ff3-4b41-b711-b256b0d5eb8f)

## Sealing and Freezing Methods
The JavaScript methods Object.preventExtensions(), Object.seal(), and Object.freeze() all serve to restrict the ways in which objects can be modified. These methods differ in their levels of restrictiveness, providing various levels of immutability and extensibility control. 

- **Object.preventExtensions(obj):** Prevents new properties from being added to the object.
![image](https://github.com/user-attachments/assets/7ca324d9-12c9-407c-8a67-e18a2676df33)

- **Object.isExtensible(obj):** Returns a boolean indicating whether new properties can be added to the object.
![image](https://github.com/user-attachments/assets/95c2f223-8b6d-4331-9665-2a22fd3f9aae)

- **Object.seal(obj):** Seals an object, preventing the addition or removal of properties (existing properties can be modified).
![image](https://github.com/user-attachments/assets/0f94a7c9-dcb8-49b3-82a7-8296faa64561)

- **Object.isSealed(obj):** Returns a lower boolean if the object is sealed.
![image](https://github.com/user-attachments/assets/3f074526-e7fd-4e09-ba76-c8a75a59c893)

- **Object.freeze(obj):** Freezes an object, preventing the addition, removal or modification of properties (makes the object immutable).
![image](https://github.com/user-attachments/assets/4b5ecce1-693c-4d68-b343-5c0c1747df73)

- **Object.isFrozen(obj):** Returns a boolean value if the object is frozen.
![image](https://github.com/user-attachments/assets/c7d3ca25-caaf-4286-b082-2f15976971b7)

## Testing and Verification Methods
These methods are used to test or verify certain conditions about objects and their properties in JavaScript. They provide a way to ensure that objects conform to specific conditions or to validate object state during runtime.

- **Object.is(value1, value2):** Determines whether two values ​​are the same value.
![image](https://github.com/user-attachments/assets/45661b52-3455-44dd-9b3b-e54c0f832843)

- **Object.toString():** returns a string that represents the object.
![image](https://github.com/user-attachments/assets/69a2bae4-7d85-425b-a358-2f5e8f8be24e)

## Utility Methods
Utility methods in JavaScript are designed to provide helpful functions for working with objects. They offer convenience in transforming and manipulating data structures, such as arrays or objects, into other formats.

- **Object.fromEntries(iterable):** Transforms a list of [key, value] pairs into an object.
![image](https://github.com/user-attachments/assets/83c9512c-4cb3-445f-95ff-aacf6ef8c659)

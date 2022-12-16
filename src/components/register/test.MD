# Queries
![alt text](./test_queries.png)
- To select a single DOM element, you can use the ```getBy```, ```findBy```, or queryBy query
- To select multiple DOM elements, you can use the ```getAllBy```, ```findAllBy``` or ```queryAllBy``` query
- ```getBy``` and ```findBy``` return an error if there is no match or more than one match
- queryBy returns null if there is no match and returns an error if there is more than one match
- ```findBy``` works well with asynchronous code but not with ```getBy``` and ```queryBy```
- ```getAllBy``` returns an error if there is no match and returns an array of matches for one or more than one match
- ```findAllBy``` returns an error if there is no match and returns an array of matches for one or more than one match
- ```queryAllBy``` returns an empty array for no match and returns an array of matches for one or more than one match

# What Not to Test with the Testing Library
- Internal state of a component
- Internal methods of a component
- Lifecycle methods of a component
- Child components

# Test double about according to Martin Fowler's article:
- ```Dummy``` objects are passed around but never actually used. Usually they are just used to fill parameter lists.
- ```Fake``` objects actually have working implementations, but usually take some shortcut which makes them not suitable for production (an in memory database is a good example).
- ```Stubs``` provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test. Stubs may also record information about calls, such as an email gateway stub that remembers the messages it 'sent', or maybe only how many messages it 'sent'.
- ```Mocks``` are what we are talking about here: objects pre-programmed with expectations which form a specification of the calls they are expected to receive.
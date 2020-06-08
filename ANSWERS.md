- [ ] Why would you use class component over function components (removing hooks from the question)?

The main reason to use a class component over a function component would be if your component needed access to some local state or the constructor method to bind methods to it.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount: This is the birth stage of a component. Here the component is first stored in memory and then mounted to the DOM and rendered.

componentDidUpdate: Anytime the props or state being passed in the component updates, the component will update and rerender. An example of this would be some sort of onChange that happens with a user interaction that would affect the state of the component.

componentWillUnmount: This is final death phase of a component when it is unmounted from the DOM. This would be the appropriate time to cleanup any side effects created by the component so that they don't persist after it is unmounted.

- [ ] What is the purpose of a custom hook?

Custom hooks allow developers a way to extract certain logic from our components that could easily be reused elsewhere in our application. It helps keep our code DRY and clean. Examples of a good use for custom hooks could be any reusuable event handlers, a localStorage hook, or even an api call that happens more than once throughout an application.

- [ ] Why is it important to test our apps?The main reason to use a class component over a function

Testing ensures that our app functions in ways that are intended, so that it can successfully be downloaded, executed and interacted with on a production level. Testing helps us find bugs sooner, plan for edge cases, and write better/trustworthy code.

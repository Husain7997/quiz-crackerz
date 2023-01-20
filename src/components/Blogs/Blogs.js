import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (

        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>what is the purpose of react router?</Accordion.Header>
                <Accordion.Body>
                    React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>how dose context api works?</Accordion.Header>
                <Accordion.Body>
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>About the react hook useref</Accordion.Header>
                <Accordion.Body>
                    React's useRef hook, short for reference, allows us to persist data across renders without causing the component to rerender. A typical use case for this hook would be to store a DOM element, which we can use to access it programmatically. You can also use it to keep a reference to the previous state of a component.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );

};

export default Blogs;
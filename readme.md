# Modal Component in React

"A simple, yet flexible, modal component for React. Easy to use and integrate into any React project. Fully accessible and customizable."

## Table of Contents

- [ReactDOM.createPortal](#using-reactDOM.createportal)
- [Installation](#installation)
- [Basic Usage](#usage)
- [Advanced Usage Using Modal with a Form](#advanced-usage-using-modal-with-a-form)
- [Props](#properties)
- [Peer Dependencies](#peer-dependencies)
- [License](#license)

## Using ReactDOM.createPortal

Our modal component leverages ReactDOM.createPortal to render the modal content. This React feature enables rendering children into a DOM node that exists outside the parent component's DOM hierarchy. This is particularly useful for modal windows, which are typically rendered at the application's root rather than as a direct child of the triggering component. Thanks to ReactDOM.createPortal, our modal can appear above the rest of the application while maintaining the same properties and behaviors as any other React component.

## How to install the Modal

Before installing the Modal component, ensure you have a `div` element with an `id` of `modal-root` in your HTML file. This is where the modal content will be rendered.

```jsx
<!-- in your HTML file  -->
<body>
  ...
  <div id="modal-root"></div>
</body>
```

Next, you can install the Modal component using npm:

```jsx
npm install @angel1979/react-simple-modal
```

## Usage

First, import the `Modal` component from the library:

```jsx
import Modal from "@angel1979/react-simple-modal";
```

Then, use the Modal component within your React component. Here's an example:

```jsx
import React, { useState } from "react";
import Modal from "@angel1979/react-simple-modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Hello, world!"
        buttonLabel="Close"
        onButtonClick={closeModal}
      >
        <p>Welcome to my modal!</p>
      </Modal>
    </div>
  );
}

export default App;
```

## Advanced Usage: Using Modal with a Form

In this example, we're using the modal within a form to add a new employee. When the form is submitted, if all inputs are valid, the modal opens.
Here's an example:

First, initialize the `isOpen` state for the modal:

```jsx
const [isModalOpen, setIsModalOpen] = useState(false);
```

In your form submission handler function, you can open the modal based on certain conditions:

```jsx
const handleSubmit = (e) => {
  e.preventDefault();

  const formErrors = validateEmployeeForm(employee);
  setErrors(formErrors);

  // Check if all error values are empty:
  if (Object.values(formErrors).some((error) => error !== "")) {
    // Display error messages
    setShowErrors(true);
    return;
  }
  // Use addEmployee from context to add the new employee
  addEmployee(employee);
  // Use resetEmployee from context to reset employee values
  resetEmployee();

  // Hide errors when the modal is open
  setShowErrors(false);

  setIsModalOpen(true);
};
```

Then, define a function to close the modal:

```jsx
const handleModalClose = () => {
  setIsModalOpen(false);
};
```

Finally, you can use the Modal component within your form and pass these functions as props:

```jsx
<Modal
  isOpen={isModalOpen}
  onClose={handleModalClose}
  title="Employee's data have been successfully stored!"
  buttonLabel="Close"
  onButtonClick={handleModalClose}
/>
```

## Properties

What props can you add ?

Modal accepts the following props:

`isOpen` (boolean, Required): The open state of the modal. If true, the modal is open. If false, the modal is closed.

`onClose` (function, Required): Function to call when the modal is requested to close. This function should set isOpen to false.

`title` (string, Optional): The title of the modal. Displayed at the top of the modal.

`buttonLabel` (string, Optional): The label of the close button. Displayed in the button that closes the modal.

`onButtonClick` (function, Optional): Function to call when the button inside the modal is clicked.

## Peer Dependencies

This component has peer dependencies with React and ReactDOM:

```jsx
"peerDependencies": {
"react": "^18.2.0",
"react-dom": "^18.2.0"
}
```

These versions are the minimum required versions.
Ensure these dependencies are met in your project.  
If you have not already installed these dependencies, you can do so by using npm or yarn:

With npm:

```jsx
npm install react react-dom
```

With yarn:

```jsx
yarn add react react-dom

```

## License

MIT

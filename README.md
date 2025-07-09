# ab-ui

A set of reusable React UI components.

## Installation

```sh
npm install ab-ui
```

## Usage

```jsx
import { AgeVerification, Button, NumberInput } from 'ab-ui';

function App() {
  return (
    <div>
      <AgeVerification />
      <Button>Click me</Button>
      <NumberInput />
    </div>
  );
}
```

## Local Development

- Run the dev server:
  ```sh
  npm run dev
  ```
- Run tests:
  ```sh
  npm test
  ```

## Build for Publishing

To build the component library for npm:

```sh
npm run build
```

This will output the distributable files to the `dist/` directory.

## Publishing

- Changesets
- Github Actions



## License

[CC BY-NC 4.0 License](https://creativecommons.org/licenses/by-nc/4.0/)

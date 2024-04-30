# @jnooks/use-title

React Hook to update your doucment's title

# Installation

#### npm
```
npm i @jnooks/use-title
```
#### yarn
```
yarn add @jnooks/use-title
```

# Usage
```ruby
import useTitle from "@jnooks/use-title"

const App = () => {
  useTitle("Welcome JNOOKS");
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};
```

### Arguments
|**Argument**|**Type**|**Description**|**Required**|
|---|:---:|---|:---:|
|title|string|The title you want to use on your document|yes|

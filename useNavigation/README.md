# @jnooks/use-navigation

This is React Hook to find your current position, when you use Navigator Geolocation.

# Installation

#### npm
```
npm i @jnooks/use-navigation
```
#### yarn
```
yarn add @jnooks/use-navigation
```

# Usage
```ruby
import useNavigation from "@jnooks/use-navigation"

const App = () => {
  const {latitude,longitude} = useNavigation();
  return (
    <div>
      <h1>Hello</h1>
      <a href={`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`} target="_blank" rel="noopener noreferrer" >Open Map</a>
    </div>
  );
};
```

### Return
|**Return value**|**Type**|**Description**|**Default value**|
|---|:---:|---|:---:|
|latitude|number|It is the latitude to use on your REST API URL|true|
|longitude|number|It is the longitude to use on your REST API URL|true|

# Reference
[Using the Geolocation API](https://developer.mozilla.org/ko/docs/Web/API/Geolocation_API/)
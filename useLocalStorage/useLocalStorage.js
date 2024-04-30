export const useLocalStorage = () => {
	const getItem=(key) => {
	  return localStorage.getItem(key)
	}
  
	const setItem = (key, value) => {
	  return localStorage.setItem(key, value);
	}
  
	const removeItem = (key) => {
	  return localStorage.removeItem(key)
	}
  
	const allClear = () => {
	  return localStorage.clear();
	}
	return {getItem,setItem,removeItem, allClear}
  };
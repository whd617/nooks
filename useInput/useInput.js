export const useInput = (initialValue, validator) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (event) => {
	  const {
		target: { value },
	  } = event;
	  let willUpdate = true;
	  if (typeof validator === "function") {
		console.log(validator);
		willUpdate = validator(value);
	  }
	  if (willUpdate) {
		setValue(value);
	  }
	};
	return { value, onChange };
  };
export const useConfirm = (message = "", onConfirm, onCancl) => {
	if (!onConfirm || typeof onConfirm !== "function") {
	  return;
	}
	if(onCancl && typeof onCancl !== "function") {
		return;
	}
	const confirmAction = () => {
	  if (confirm(message)) {
		onConfirm();
	  } else {
		onCancl();
	  }
	};
	return confirmAction;
  };
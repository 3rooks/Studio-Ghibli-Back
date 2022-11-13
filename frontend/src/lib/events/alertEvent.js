const emitEvent = (message) => {
	const event = new CustomEvent('alert', {
		detail: { message }
	});

	document.dispatchEvent(event);
};

export default emitEvent;

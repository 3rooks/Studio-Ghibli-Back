export const fileToDataURL = (file) =>
	new Promise((resolve, reject) => {
		const fileReader = new FileReader();

		fileReader.addEventListener('loadend', () =>
			resolve(fileReader.result)
		);
		fileReader.addEventListener('abort', () =>
			reject(new Error('Error to process'))
		);
		fileReader.addEventListener('error', () =>
			reject(new Error('Error to process'))
		);
		fileReader.readAsDataURL(file);
	});

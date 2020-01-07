export default (username, password) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username === 'iqbal' && password === 'deenislam.' ? true : false) {
				resolve(username);
			} else {
				reject('Username and/or password is incorrect');
			}
		}, 1000);
	});
};
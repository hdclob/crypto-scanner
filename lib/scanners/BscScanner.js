const axios = require('axios')

class BscScanner {
	constructor(query) {
		this.query = query;
	}

	async fetchData() {
		const response = await axios.get(`https://bscscan.com/searchHandler?term=${this.query}&filterby=0`);

		let data = response.data;

		for (const item of data) {
			console.log(item.split("\t"))
		}

		return data;
	}
}

export default BscScanner;

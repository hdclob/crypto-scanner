const axios = require('axios')

class EtherScanner {
	constructor(query) {
		this.query = query;
	}

	async fetchData() {
		const response = await axios.get(`https://etherscan.io/searchHandler?term=${this.query}&filterby=0`);

		let data = response.data;

		for (const item of data) {
			if (item.img.length > 0 && !item.img.startsWith('http')) {
				item.img = `https://etherscan.io/token/images/${item.img}`;
			}
		}

		return data;
	}
}

export default EtherScanner;

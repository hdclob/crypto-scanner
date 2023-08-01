class DexToolsScanner {
	constructor(query) {
		this.query = query;
	}

	async fetchNewestTokens() {
		let data = [];
		for (let page = 1;;page++) {
			// const response = await fetch(`https://www.dextools.io/shared/analytics/pairs?limit=51&interval=24h&page=1`);
			const response = await fetch(`https://www.dextools.io/shared/analytics/pairs?&page=${page}`);

			let d = await response.json();

			if (d.code == 'ERROR' || d.hasOwnProperty('error')) {
				break;
			}

			d = d.data;

			d = d.filter(el => el.token.creationTime != undefined)

			data = data.concat(d);

			await new Promise(resolve => setTimeout(resolve, 500));
		}

		data.sort((a, b) => new Date(b.token.creationTime).getTime() - new Date(a.token.creationTime).getTime())

		data = data.slice(0, 100);

		return data;
	}
}

export default DexToolsScanner;

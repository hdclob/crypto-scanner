class DexToolsScanner {
	constructor(query) {
		this.query = query;
	}

	async fetchData() {
		const response = await fetch(`https://www.dextools.io/shared/analytics/pairs?limit=51&interval=24h&page=1`);

        let data = await response.json();

		data = data.data;

		return data;
	}
}

export default DexToolsScanner;

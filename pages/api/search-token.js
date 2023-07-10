const axios = require('axios')

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { searchValue } = req.body;

		try {
			const response = await axios.get(`https://etherscan.io/searchHandler?term=${searchValue}&filterby=0`);

			let data = response.data;

			for (const item of data) {
				if (item.img.length > 0 && !item.img.startsWith('http')) {
					item.img = `https://etherscan.io/token/images/${item.img}`;
				}
			}

			res.status(200).json(data);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}

		res.status(200).json({ searchValue });
	} else {
		res.status(405).end();
	}
}

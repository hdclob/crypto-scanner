import DexToolsScanner from "../../lib/scanners/DexToolsScanner";

const fs = require('fs');

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const dexToolsScanner = new DexToolsScanner();

			let data = await dexToolsScanner.fetchNewestTokens();

			res.status(200).json(data);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	} else {
		res.status(405).end();
	}
}

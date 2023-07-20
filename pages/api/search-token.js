import EtherScanner from "../../lib/scanners/EtherScanner";
import BscScanner from "../../lib/scanners/BscScanner";

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { searchValue } = req.body;

		try {
			const etherScanner = new EtherScanner(searchValue);
			const bscScanner = new BscScanner(searchValue);

			let etherData = await etherScanner.fetchData();
			let bscData = await bscScanner.fetchData();

			res.status(200).json(etherData);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	} else {
		res.status(405).end();
	}
}

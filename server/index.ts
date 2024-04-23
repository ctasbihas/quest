import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
	const { query } = req.query;
	res.send(`Hello, World! ${query}`);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

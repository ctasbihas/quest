import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 5000;
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.send('Hello, World!');
});

// User API routes
app.post('/createUser', async (req: Request, res: Response) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		return res.status(400).json({ error: 'Missing Info' });
	}
	const userExists = await prisma.user.findUnique({
		where: {
			email,
		},
	});
	if (userExists) {
		return res.status(400).json({ error: 'User already exists' });
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const user = await prisma.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
		},
	});

	res.send(user);
});
app.get('/signin', async (req: Request, res: Response) => {
	const { email, password } = req.query;
	try {
		const user = await prisma.user.findUnique({
			where: {
				email: email as string,
			},
		});
		if (!user) {
			return res.status(400).json({ error: 'User not found' });
		}

		const isPassCorrect = await bcrypt.compare(
			password as string,
			user.password as string
		);
		if (!isPassCorrect) {
			return res.status(400).json({ error: 'Invalid password' });
		}

		res.json(user);
	} catch (error) {
		console.error('Error signing in:', error);
		res.status(500).json({ error: 'Error signing in. Please try again.' });
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

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

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

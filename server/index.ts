import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const prisma = new PrismaClient();

app.use(express.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: true,
	service: 'gmail',
	auth: {
		user: 'ctasbihas@gmail.com',
		pass: 'prid xrso wqgm zokx',
	},
});

// Function to generate OTP
function generateOTP() {
	const otp = crypto.randomInt(100000, 999999); // generates six-digit random number
	return otp.toString();
}

app.get('/', (req: Request, res: Response) => {
	res.send('Hello, World!');
});

// User API routes
app.post('/register', async (req: Request, res: Response) => {
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
app.get('/login', async (req: Request, res: Response) => {
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
		if (user.password !== password && !isPassCorrect) {
			return res.status(400).json({ error: 'Invalid password' });
		}

		res.json(user);
	} catch (error) {
		console.error('Error Logging in:', error);
		res.status(500).json({ error: 'Error logging in. Please try again.' });
	}
});
app.post('/sendOtp', async (req: Request, res: Response) => {
	const { toEmail } = req.body;
	const otp = generateOTP();

	const mailOptions = {
		from: 'quest@gmail.com',
		to: toEmail,
		subject: 'Your Verification OTP from Quest',
		text: `Your OTP is ${otp}. This OTP is valid for 10 minutes.`,
		html: `<p>Your OTP is <strong>${otp}</strong>. This OTP is valid for 10 minutes.</p>`,
	};

	try {
		await transporter.sendMail(mailOptions);

		const otpStore = { otp: otp, timestamp: Date.now() };
		res.send({ message: 'OTP sent successfully!', otpStore });
	} catch (error) {
		console.error('Error sending OTP:', error);
		res.status(500).send({ error: 'Error sending OTP' });
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

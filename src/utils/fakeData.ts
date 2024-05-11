const stories = [
	{
		id: 1,
		userImage:
			'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		userName: 'Alice Johnson',
	},
	{
		id: 2,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Bob Smith',
	},
	{
		id: 3,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Carol Taylor',
	},
	{
		id: 4,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'David Brown',
	},
	{
		id: 5,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Eva Martin',
	},
];

const chats = [
	{
		id: 1,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Alice Johnson',
		message: 'Hm',
		lastMessaged: '08:52',
		unreadMessages: 1,
	},
	{
		id: 2,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Bob Smith',
		message: 'Ok',
		lastMessaged: '00:22',
		unreadMessages: 0,
	},
	{
		id: 3,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Carol Taylor',
		message: 'Voice call',
		lastMessaged: 'Yesterday',
		unreadMessages: 0,
	},
	{
		id: 4,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'David Brown',
		message: 'Voice call',
		lastMessaged: 'Yesterday',
		unreadMessages: 0,
	},
	{
		id: 5,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Eva Martin',
		message: 'Voice call',
		lastMessaged: 'Yesterday',
		unreadMessages: 0,
	},
	{
		id: 6,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Frank Clark',
		message: 'Voice call',
		lastMessaged: 'Yesterday',
		unreadMessages: 0,
	},
	{
		id: 7,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Grace Lewis',
		message: 'Voice call',
		lastMessaged: '4/24/24',
		unreadMessages: 0,
	},
	{
		id: 8,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Henry Walker',
		message: 'Voice call',
		lastMessaged: '4/24/24',
		unreadMessages: 0,
	},
	{
		id: 9,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Isabel Allen',
		message: 'Voice call',
		lastMessaged: '4/24/24',
		unreadMessages: 0,
	},
	{
		id: 10,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Jack Lee',
		message: 'Voice call',
		lastMessaged: '4/24/24',
		unreadMessages: 0,
	},
	{
		id: 11,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Karen Young',
		message: "I'll call you later.",
		lastMessaged: '4/24/24',
		unreadMessages: 0,
	},
	{
		id: 12,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Leo Scott',
		message: 'Msg on my Messenger.',
		lastMessaged: '4/24/24',
		unreadMessages: 0,
	},
	{
		id: 13,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Mia Harris',
		message: 'FreeFire?',
		lastMessaged: '4/23/24',
		unreadMessages: 0,
	},
	{
		id: 14,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Nigel Carter',
		message: 'Deadpool X Wolverine',
		lastMessaged: '4/23/24',
		unreadMessages: 0,
	},
	{
		id: 15,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Olivia Moore',
		message: 'Dance class tomorrow.',
		lastMessaged: '4/23/24',
		unreadMessages: 0,
	},
	{
		id: 16,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Paul Thompson',
		message: 'Voice call',
		lastMessaged: '4/23/24',
		unreadMessages: 0,
	},
	{
		id: 17,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Quinn Robinson',
		message: 'Voice call',
		lastMessaged: '4/23/24',
		unreadMessages: 0,
	},
	{
		id: 18,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Rachel Sanchez',
		message: 'New recipe?',
		lastMessaged: '4/23/24',
		unreadMessages: 0,
	},
	{
		id: 19,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Steve Adams',
		message: 'Are you free today?',
		lastMessaged: '4/23/24',
		unreadMessages: 5,
	},
	{
		id: 20,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Tina Johnson',
		message: 'Let me know when you are free.',
		lastMessaged: '4/20/24',
		unreadMessages: 2,
	},
];

const messages = [
	{
		id: 1,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'Hello, Eva Martin',
		timestamp: 'Tue May 07 2024 21:37:50 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 2,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'Hello, Tasbih. How are you?',
		timestamp: 'Tue May 07 2024 21:38:25 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 3,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: "I'm good. How about you?",
		timestamp: 'Tue May 07 2024 21:38:50 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 4,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'I am doing great. You did well yesterday.',
		timestamp: 'Tue May 07 2024 21:40:14 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 5,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'Thank you. You were great too.',
		timestamp: 'Tue May 07 2024 21:45:37 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 6,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'How was your day?',
		timestamp: 'Tue May 07 2024 22:10:20 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 7,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'It was good. I had a productive day.',
		timestamp: 'Tue May 07 2024 22:12:45 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 8,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: "That's great to hear!",
		timestamp: 'Tue May 07 2024 22:15:30 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 9,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'Yes, it was. How about you?',
		timestamp: 'Tue May 07 2024 22:18:10 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 10,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'I had a busy day, but it was productive too.',
		timestamp: 'Tue May 07 2024 22:20:55 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 11,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'How was your weekend?',
		timestamp: 'Tue May 07 2024 22:30:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 12,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'It was great! I went hiking.',
		timestamp: 'Tue May 07 2024 22:32:15 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 13,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'That sounds fun! I love hiking.',
		timestamp: 'Tue May 07 2024 22:35:30 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 14,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'Yes, it was amazing. The views were breathtaking.',
		timestamp: 'Tue May 07 2024 22:38:45 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 15,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'I need to plan a hiking trip soon.',
		timestamp: 'Tue May 07 2024 22:42:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 16,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'This is a new message.',
		timestamp: 'Tue May 07 2024 22:50:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 17,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'Another new message. What a beautiful day!!',
		timestamp: 'Tue May 07 2024 22:55:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 18,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'Yet another new message.',
		timestamp: 'Tue May 07 2024 23:00:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 19,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'One more new message.',
		timestamp: 'Tue May 07 2024 23:05:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 20,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'Last new message.',
		timestamp: 'Tue May 07 2024 23:10:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 21,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'Another message.',
		timestamp: 'Tue May 07 2024 23:15:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 22,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'More messages.',
		timestamp: 'Tue May 07 2024 23:20:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 23,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'Even more messages.',
		timestamp: 'Tue May 07 2024 23:25:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 24,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'Another message here.',
		timestamp: 'Tue May 07 2024 23:30:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 25,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'More messages to come.',
		timestamp: 'Tue May 07 2024 23:35:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 26,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'Another message.',
		timestamp: 'Tue May 07 2024 23:40:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 27,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'Another message here.',
		timestamp: 'Tue May 07 2024 23:45:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 28,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'More messages to come.',
		timestamp: 'Tue May 07 2024 23:50:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 29,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'Another message here.',
		timestamp: 'Tue May 07 2024 23:55:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 30,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'More messages to come.',
		timestamp: 'Tue May 08 2024 00:00:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 31,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'Another message.',
		timestamp: 'Tue May 08 2024 00:05:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 32,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'Another message here.',
		timestamp: 'Tue May 08 2024 00:10:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 33,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'More messages to come.',
		timestamp: 'Tue May 08 2024 00:15:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 34,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'Another message here.',
		timestamp: 'Tue May 08 2024 00:20:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 35,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'More messages to come.',
		timestamp: 'Tue May 08 2024 00:25:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 36,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'Another message.',
		timestamp: 'Tue May 08 2024 00:30:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 37,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'Another message here.',
		timestamp: 'Tue May 08 2024 00:35:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 38,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'More messages to come.',
		timestamp: 'Tue May 08 2024 00:40:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 39,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'Another message here.',
		timestamp: 'Tue May 08 2024 00:45:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 40,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'More messages to come.',
		timestamp: 'Tue May 08 2024 00:50:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 41,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'Another message.',
		timestamp: 'Tue May 08 2024 00:55:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 42,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'Another message here.',
		timestamp: 'Tue May 08 2024 01:00:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 43,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'More messages to come.',
		timestamp: 'Tue May 08 2024 01:05:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 44,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'Another message here.',
		timestamp: 'Tue May 08 2024 01:10:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 45,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'More messages to come.',
		timestamp: 'Tue May 08 2024 01:15:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 46,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'Another message.',
		timestamp: 'Tue May 08 2024 01:20:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 47,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'Another message here.',
		timestamp: 'Tue May 08 2024 01:25:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 48,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'More messages to come.',
		timestamp: 'Tue May 08 2024 01:30:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 49,
		senderId: 5,
		recipientId: '6628adb27fa99bdd669d96fa',
		message: 'Another message here.',
		timestamp: 'Tue May 08 2024 01:35:00 GMT+0600',
		messageStatus: 'Read',
	},
	{
		id: 50,
		senderId: '6628adb27fa99bdd669d96fa',
		recipientId: 5,
		message: 'More messages to come. Tomorrow evening.😊😊',
		timestamp: 'Tue May 08 2024 01:40:00 GMT+0600',
		messageStatus: 'Read',
	},
];

const recentCalls = [
	{
		id: 1,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Alice Johnson',
		callStatus: 'outgoing',
		callTime: 'Just now',
		callType: 'video',
	},
	{
		id: 2,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Bob Smith',
		callStatus: 'outgoing',
		callTime: 'Today, 21:49',
		callType: 'audio',
	},
	{
		id: 3,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Carol Taylor',
		callStatus: 'missed',
		callTime: 'Today, 21:31',
		callType: 'video',
	},
	{
		id: 4,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'David Brown',
		callStatus: 'outgoing',
		callTime: 'Today, 21:29',
		callType: 'audio',
	},
	{
		id: 5,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Eva Martin',
		callStatus: 'outgoing',
		callTime: 'Today, 21:28',
		callType: 'video',
	},
	{
		id: 6,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Frank Clark',
		callStatus: 'incoming',
		callTime: 'Yesterday, 20:40',
		callType: 'audio',
	},
	{
		id: 7,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Grace Lewis',
		callStatus: 'outgoing',
		callTime: 'Yesterday, 20:34',
		callType: 'video',
	},
	{
		id: 8,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Henry Walker',
		callStatus: 'outgoing',
		callTime: 'Yesterday, 20:33',
		callType: 'audio',
	},
	{
		id: 9,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Isabel Allen',
		callStatus: 'outgoing',
		callTime: 'Yesterday, 10:42',
		callType: 'video',
	},
	{
		id: 10,
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		userName: 'Jack Lee',
		callStatus: 'incoming',
		callTime: 'April 24, 21:59',
		callType: 'audio',
	},
];

const contacts = [
	{
		id: 1,
		userName: 'Alice Johnson',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Avid gardener and nature lover.',
	},
	{
		id: 2,
		userName: 'Bob Smith',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Tech enthusiast and drone pilot.',
	},
	{
		id: 3,
		userName: 'Carol Taylor',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Freelance writer and editor.',
	},
	{
		id: 4,
		userName: 'David Brown',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Passionate about photography and travel.',
	},
	{
		id: 5,
		userName: 'Eva Martin',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Coffee connoisseur and bookworm.',
	},
	{
		id: 6,
		userName: 'Frank Clark',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Cycling and outdoor adventure.',
	},
	{
		id: 7,
		userName: 'Grace Lewis',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Loves cooking and blogging about food.',
	},
	{
		id: 8,
		userName: 'Henry Walker',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Film critic and history buff.',
	},
	{
		id: 9,
		userName: 'Isabel Allen',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Professional musician and teacher.',
	},
	{
		id: 10,
		userName: 'Jack Lee',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Fitness trainer and health guru.',
	},
	{
		id: 11,
		userName: 'Karen Young',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Entrepreneur and startup advisor.',
	},
	{
		id: 12,
		userName: 'Leo Scott',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Video game developer and player.',
	},
	{
		id: 13,
		userName: 'Mia Harris',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Environmental scientist and activist.',
	},
	{
		id: 14,
		userName: 'Nigel Carter',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Architect and urban planner.',
	},
	{
		id: 15,
		userName: 'Olivia Moore',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Professional dancer and choreographer.',
	},
	{
		id: 16,
		userName: 'Paul Thompson',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Car enthusiast and mechanical engineer.',
	},
	{
		id: 17,
		userName: 'Quinn Robinson',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Web designer and developer.',
	},
	{
		id: 18,
		userName: 'Rachel Sanchez',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Veterinarian and animal rights advocate.',
	},
	{
		id: 19,
		userName: 'Steve Adams',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'High school teacher and sports coach.',
	},
	{
		id: 20,
		userName: 'Tina Johnson',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Event planner and travel enthusiast.',
	},
	{
		id: 21,
		userName: 'Thomas Shelbi',
		userImage:
			'https://i.pinimg.com/236x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg',
		about: 'Event planner and travel enthusiast.',
	},
];

export { chats, contacts, messages, recentCalls, stories };

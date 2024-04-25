const stories = [
	{
		id: 0,
		userImage:
			'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		userName: 'Person 1',
	},
	{
		id: 1,
		userImage:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		userName: 'Person 1',
	},
	{
		id: 2,
		userImage:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		userName: 'Person 2',
	},
	{
		id: 3,
		userImage: 'https://source.unsplash.com/random/200x200?user3',
		userName: 'Person 3',
	},
	{
		id: 4,
		userImage: 'https://source.unsplash.com/random/200x200?user3',
		userName: 'Person 4',
	},
];

const chats = [
	{
		id: 0,
		userImage:
			'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		userName: 'Person 0',
		message: 'Hello, World!',
		lastMessaged: '2 hours ago',
		unreadMessages: 2,
	},
	{
		id: 1,
		userImage:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		userName: 'Person 1',
		message: 'Hello, World!',
		lastMessaged: '2 hours ago',
		unreadMessages: 14,
	},
	{
		id: 2,
		userImage:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		userName: 'Person 2',
		message: 'Hello, World!',
		lastMessaged: '2 hours ago',
		unreadMessages: 1,
	},
	{
		id: 3,
		userImage: 'https://source.unsplash.com/random/200x200?user3',
		userName: 'Person 3',
		message: 'Hello, World!',
		lastMessaged: '2 hours ago',
		unreadMessages: 0,
	},
	{
		id: 4,
		userImage: 'https://source.unsplash.com/random/200x200?user4',
		userName: 'Person 4',
		message: 'Hello, World!',
		lastMessaged: '2 hours ago',
		unreadMessages: 5,
	},
	{
		id: 5,
		userImage: 'https://source.unsplash.com/random/200x200?user5',
		userName: 'Person 5',
		message: 'Hello, World!',
		lastMessaged: '2 hours ago',
		unreadMessages: 0,
	},
	{
		id: 6,
		userImage: 'https://source.unsplash.com/random/200x200?user6',
		userName: 'Person 6',
		message: 'Hello, World!',
		lastMessaged: '2 hours ago',
		unreadMessages: 3,
	},
	{
		id: 7,
		userImage: 'https://source.unsplash.com/random/200x200?user7',
		userName: 'Person 7',
		message: 'Hello, World!',
		lastMessaged: '2 hours ago',
		unreadMessages: 0,
	},
	{
		id: 8,
		userImage: 'https://source.unsplash.com/random/200x200?user8',
		userName: 'Person 8',
		message: 'Hello, World!',
		lastMessaged: '2 hours ago',
		unreadMessages: 1,
	},
	{
		id: 9,
		userImage: 'https://source.unsplash.com/random/200x200?user9',
		userName: 'Person 9',
		message: 'Hello, World!',
		lastMessaged: '2 hours ago',
		unreadMessages: 0,
	},
	{
		id: 10,
		userImage: 'https://source.unsplash.com/random/200x200?user10',
		userName: 'Person 10',
		message: 'Hello, World!',
		lastMessaged: '2 hours ago',
		unreadMessages: 7,
	},
	{
		id: 11,
		userImage: 'https://source.unsplash.com/random/200x200?user11',
		userName: 'Person 11',
		message: 'Hello, World!',
		lastMessaged: '2 hours ago',
		unreadMessages: 0,
	},
	{
		id: 12,
		userImage: 'https://source.unsplash.com/random/200x200?user12',
		userName: 'Person 12',
		message: 'Hello, World!',
		lastMessaged: '2 hours ago',
		unreadMessages: 2,
	},
	{
		id: 13,
		userImage: 'https://source.unsplash.com/random/200x200?user13',
		userName: 'Person 13',
		message: 'Hello, World!',
		lastMessaged: '2 hours ago',
		unreadMessages: 0,
	},
];

const recentCalls = [
	{
		id: 0,
		userImage:
			'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		userName: 'Tanvir Chowdhury',
		callStatus: 'outgoing',
		callTime: 'Just now',
		callType: 'video',
	},
	{
		id: 1,
		userImage:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		userName: 'Tamzid Ahamed',
		callStatus: 'outgoing',
		callTime: 'Today, 21:49',
		callType: 'audio',
	},
	{
		id: 2,
		userImage: 'https://source.unsplash.com/random/200x200?user3',
		userName: 'Tamzid Ahamed',
		callStatus: 'missed',
		callTime: 'Today, 21:31',
		callType: 'video',
	},
	{
		id: 3,
		userImage: 'https://source.unsplash.com/random/200x200?user4',
		userName: 'Nure Alam Rafi',
		callStatus: 'outgoing',
		callTime: 'Today, 21:29',
		callType: 'audio',
	},
	{
		id: 4,
		userImage: 'https://source.unsplash.com/random/200x200?user5',
		userName: 'Tamzid Ahamed',
		callStatus: 'outgoing',
		callTime: 'Today, 21:28',
		callType: 'video',
	},
	{
		id: 5,
		userImage: 'https://source.unsplash.com/random/200x200?user6',
		userName: 'Nanu',
		callStatus: 'incoming',
		callTime: 'Yesterday, 20:40',
		callType: 'audio',
	},
	{
		id: 6,
		userImage: 'https://source.unsplash.com/random/200x200?user7',
		userName: 'Taskia Binte Arif',
		callStatus: 'outgoing',
		callTime: 'Yesterday, 20:34',
		callType: 'video',
	},
	{
		id: 7,
		userImage: 'https://source.unsplash.com/random/200x200?user8',
		userName: 'Nanu',
		callStatus: 'outgoing',
		callTime: 'Yesterday, 20:33',
		callType: 'audio',
	},
	{
		id: 8,
		userImage: 'https://source.unsplash.com/random/200x200?user9',
		userName: 'Nure Alam Rafi',
		callStatus: 'outgoing',
		callTime: 'Yesterday, 10:42',
		callType: 'video',
	},
	{
		id: 9,
		userImage: 'https://source.unsplash.com/random/200x200?user9',
		userName: 'Nure Alam',
		callStatus: 'incoming',
		callTime: 'April 24, 21:59',
		callType: 'audio',
	},
];

export { chats, recentCalls, stories };

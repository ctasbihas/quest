interface ContactGroup {
	initialLetter: string;
	data: any[];
}

export const groupContactsByInitials = (contacts: any[]): ContactGroup[] => {
	// Initialize an object to hold grouped contacts
	const groupedContacts: { [key: string]: any[] } = {};

	// Group contacts by the first letter of their name
	contacts.forEach(contact => {
		const initialLetter = contact.userName[0].toUpperCase();
		// Create an array for each initial letter if it doesn't exist
		if (!groupedContacts[initialLetter]) {
			groupedContacts[initialLetter] = [];
		}
		// Add the contact to the corresponding array
		groupedContacts[initialLetter].push(contact);
	});

	// Sort the keys (initial letters) in alphabetical order
	const sortedInitials = Object.keys(groupedContacts).sort();

	// Create the final array of objects
	const sortedList: ContactGroup[] = sortedInitials.map(initial => ({
		initialLetter: initial,
		data: groupedContacts[initial],
	}));

	return sortedList;
};

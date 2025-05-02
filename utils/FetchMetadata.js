// Function to fetch metadata from the API
export const fetchMetadata = async (key) => {
 const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Use env variable for better reliability
 const res = await fetch(`${baseUrl}/api/metadata?key=${key}`); // Construct the URL dynamically
 if (!res.ok) {
   throw new Error('Failed to fetch metadata');
 }
 return res.json();
};

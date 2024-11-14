// src/api.js

import { generateClient } from 'aws-amplify/data';

// Generate a client for making requests to the backend
const client = generateClient();

// Function to fetch all Show items
export async function fetchShows() {
  const { data: shows, errors } = await client.models.Show.list();
  if (errors) {
    console.error('Error fetching shows:', errors);
    return [];
  }
  return shows;
}

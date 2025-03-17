const BASE_URL = 'https://challenge.egodesign.dev/api/models/';

export const getModelById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}/`);
    if (!response.ok) {
      throw new Error('Failed to fetch model');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching model:', error);
    throw error;
  }
};
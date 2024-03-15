const API_URL = "https://jsonplaceholder.typicode.com/users"
export const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Error fetching data')
    }
  const data = await response.json();
  return data
  }
  catch (error) {
    throw new Error('Failed loading data')
  }
}

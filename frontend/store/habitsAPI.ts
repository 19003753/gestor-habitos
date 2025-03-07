export const fetchHabits = async () => {
    const response = await fetch ("http://localhost:5001/habitos");
    if (!response.ok) {
        throw new Error("Failed to fetch habits");
    }
    return response.json();
}
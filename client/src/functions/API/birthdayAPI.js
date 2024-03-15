// G E T - get all CGI birthdays

// Endpoint Variables
const birthdayEndpoint = "http://localhost:3001/api/birthdays"

export const fetchBirthdaysApi = async (setBirthdays) => {
    try {
      const response = await fetch(birthdayEndpoint);
      const data = await response.json();
      setBirthdays(data);
      console.log("This is CGI birthdays", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
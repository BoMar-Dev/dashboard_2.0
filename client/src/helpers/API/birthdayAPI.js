// G E T
export const fetchBirthdaysApi = async (setBirthdays) => {
    try {
      const response = await fetch("http://localhost:3001/api/birthdays");
      const data = await response.json();
      setBirthdays(data);
      console.log("This is CGI birthdays", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
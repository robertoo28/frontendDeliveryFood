import axios from "axios";
const API_URL = "http://localhost:8080/api/noti";
// Function to send a notification
const sendNotification = async (notificationData) => {
    try {
      const response = await axios.post(API_URL, notificationData);
      console.log(response.data); // Process response data
    } catch (error) {
      console.error(error); // Handle error
    }
  };
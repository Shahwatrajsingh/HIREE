export const requestNotificationPermission = async () => {
    if (!("Notification" in window)) {
      console.error("This browser does not support notifications.");
      return false;
    }
  
    if (Notification.permission === "granted") {
      console.log("Notification permission already granted.");
      return true;
    }
  
    if (Notification.permission !== "denied") {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          console.log("Notification permission granted.");
          return true;
        } else {
          console.warn("Notification permission denied.");
          return false;
        }
      } catch (error) {
        console.error("Error requesting notification permission:", error);
        return false;
      }
    }
  
    console.warn("Notification permission was previously denied.");
    return false;
  };
  
  export const showNotification = (title, options = {}) => {
    if (!("Notification" in window)) {
      console.error("This browser does not support notifications.");
      return;
    }
  
    if (Notification.permission === "granted") {
      new Notification(title, options);
    } else {
      console.warn("Cannot show notification. Permission not granted.");
    }
  };
  
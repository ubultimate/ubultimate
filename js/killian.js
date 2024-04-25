// Function to calculate days and times between two dates
function calculateTime(id, startDate) {
    const startDateTime = new Date(startDate);
    const currentDate = new Date();
  
    const timeDifference = currentDate.getTime() - startDateTime.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsDifference = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    document.getElementById(id).innerText = `${daysDifference} days, ${hoursDifference} hours, ${minutesDifference} minutes, ${secondsDifference} seconds`;
  }
  
  // Call the function initially for both rows
  calculateTime('counter1', '2023-12-09T19:30:00');
  
  // Update the counters every second
  setInterval(() => {
    calculateTime('counter1', '2023-12-09T19:30:00');

  }, 1000);
  
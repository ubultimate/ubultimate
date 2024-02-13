  // Function to calculate days and times between two dates
  function calculateTime() {
    const grahamThrowDate = new Date('2024-02-12T22:45:00');
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - grahamThrowDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsDifference = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('counter').innerText = `${daysDifference}days, ${hoursDifference}h, ${minutesDifference}min, ${secondsDifference}s`;
  }

  // Call the function initially
  calculateTime();

  // Update the counter every second
  setInterval(calculateTime, 1000);
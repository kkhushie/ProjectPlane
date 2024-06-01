document.addEventListener('DOMContentLoaded', function() {
    const daysContainer = document.querySelector('.days');
  
    // Number of days in June
    const totalDays = 30;
  
    for (let i = 1; i <= totalDays; i++) {
      const day = document.createElement('div');
      day.classList.add('day');
      day.textContent = i;
  
      // Simulate completion for demonstration
      if (i <= getCurrentDayOfMonth()) {
        day.classList.add('completed');
      }
  
      // Check local storage for stored checked state
      const isChecked = localStorage.getItem(`day${i}`) === 'true';
      if (isChecked) {
        day.classList.add('checked');
      }
  
      // Add click event to toggle checked state
      day.addEventListener('click', function() {
        this.classList.toggle('checked');
        // Store checked state in local storage
        localStorage.setItem(`day${i}`, this.classList.contains('checked'));
      });
  
      daysContainer.appendChild(day);
    }
  });
  
  function getCurrentDayOfMonth() {
    const now = new Date();
    return now.getDate();
  }
  
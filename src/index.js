document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById('create-task-form'); 
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks'); 
  const appContainer = document.getElementById('main-content');
  
  // Style for the body
  document.body.style.cssText = `
      font-family: 'Helvetica Neue', sans-serif;
      background: radial-gradient(circle, #f5f7fa 0%, #c3cfe2 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      padding: 0;
  `;

  // Style for the main app container
  appContainer.style.cssText = `
      background-color: #B3E5FC;
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
      max-width: 450px;
      text-align: center;
  `;

  // Header styling
  const header = appContainer.querySelector('h1');
  header.style.cssText = `
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 30px;
      color: #333333;
      letter-spacing: 1px;
  `;

  // Form styling
  taskForm.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 25px;
  `;

  // Input field styling
  taskInput.style.cssText = `
      flex: 1;
      padding: 12px 18px;
      border: 2px solid #e0e0e0;
      border-radius: 10px;
      margin-right: 10px;
      font-size: 16px;
      transition: border-color 0.3s ease;
  `;

  taskInput.addEventListener('focus', () => {
      taskInput.style.borderColor = '#6c63ff';
  });
  taskInput.addEventListener('blur', () => {
      taskInput.style.borderColor = '#e0e0e0';
  });

  // Submit button styling
  const submitBtn = taskForm.querySelector('input[type="submit"]'); 
  submitBtn.style.cssText = `
      background-color: #6c63ff;
      color: white;
      border: none;
      border-radius: 10px;
      padding: 12px 20px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.1s ease;
  `;

  // Submit button effects
  submitBtn.addEventListener('mouseover', () => {
      submitBtn.style.backgroundColor = '#5548c8';
  });
  submitBtn.addEventListener('mouseout', () => {
      submitBtn.style.backgroundColor = '#6c63ff';
  });
  submitBtn.addEventListener('mousedown', () => {
      submitBtn.style.transform = 'scale(0.98)';
  });
  submitBtn.addEventListener('mouseup', () => {
      submitBtn.style.transform = 'scale(1)';
  });

  // Task form submission event
  taskForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      const taskText = taskInput.value.trim(); // Get task text

      if (taskText === "") {
          alert("Task description cannot be empty!"); // Alert if input is empty
          return;
      }

      const taskItem = document.createElement('li'); // Create a new task item
      taskItem.textContent = taskText; // Set the text content of the task item
      taskItem.style.cssText = `
          background-color: #f4f4f9;
          padding: 15px 20px;
          margin-bottom: 10px;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #ddd;
          transition: background-color 0.3s ease, box-shadow 0.2s ease;
      `;

      // Task item hover effects
      taskItem.addEventListener('mouseover', () => {
          taskItem.style.backgroundColor = '#e0eaff';
          taskItem.style.boxShadow = '0px 5px 15px rgba(0, 0, 0, 0.05)';
      });
      taskItem.addEventListener('mouseout', () => {
          taskItem.style.backgroundColor = '#f4f4f9';
          taskItem.style.boxShadow = 'none';
      });

      // Create the delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "X"; // Set button text
      deleteBtn.style.cssText = `
          background-color: #ff4d4d;
          border: none;
          color: white;
          padding: 10px 15px;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.1s ease;
      `;

      // Delete button hover effects
      deleteBtn.addEventListener('mouseover', () => {
          deleteBtn.style.backgroundColor = '#e60000';
      });
      deleteBtn.addEventListener('mouseout', () => {
          deleteBtn.style.backgroundColor = '#ff4d4d';
      });
      deleteBtn.addEventListener('mousedown', () => {
          deleteBtn.style.transform = 'scale(0.95)';
      });
      deleteBtn.addEventListener('mouseup', () => {
          deleteBtn.style.transform = 'scale(1)';
      });

      // Delete task event
      deleteBtn.addEventListener('click', () => {
          taskList.removeChild(taskItem); // Remove task item from the list
      });

      // Append delete button to task item and then to the task list
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);

      taskInput.value = ""; // Reset the input field

  });

  // Style for the task list
  taskList.style.cssText = `
      list-style: none;
      padding: 0;
      margin: 0;
  `;
});

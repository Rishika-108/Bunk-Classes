/* total no of lectures = per day average lectures* month (total month days - holidays) 
 the person desires 75 % = > lectures that can be bunked will 0.25*total no of lectures

 per day average lectures= > can be get from input field
 select month = > will give month
 
  %value will be got from buttons

  on submit will update the text below
*/


  document.querySelectorAll('.per-btn .btn').forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons
      document.querySelectorAll('.per-btn .btn').forEach(btn => btn.classList.remove('active'));
      
      // Add 'active' class to the clicked button
      button.classList.add('active');
    });
  });
  document.querySelector('.sub-btn').addEventListener('click', ()=>  {
  const lecturesPerDay = parseInt(document.querySelector('.txt').value);  
  const month = parseInt(document.querySelector('#select-month').value);
  const activeButton = document.querySelector('.per-btn .active');
  
  if (!activeButton) {
    alert("Please select a required attendance percentage.");
    return;
  }
  const requiredAttendance = parseFloat(activeButton.value);
  /*const requiredAttendance = parseFloat(document.querySelector('per-btn .active').value);*/

  if (isNaN(lecturesPerDay) || isNaN(month) || isNaN(requiredAttendance)) {
    alert("Please enter valid input values");
    return;
  }

  const totalLectures = lecturesPerDay*month;
  const bunkableLectures = totalLectures*requiredAttendance; 
  console.log(bunkableLectures);
  const message =  `You can bunk ${Math.floor(bunkableLectures )} classes.`;
  document.querySelector ('.result p').innerText = message;
  console.log(`Month: ${month}, Bunkable Lectures: ${Math.floor(bunkableLectures)}`)
});
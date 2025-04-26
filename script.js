const habitForm = document.getElementById('habit-form');
const habitInput = document.getElementById('habit-input');
const habitList = document.getElementById('habit-list');

habitForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const habitText = habitInput.value.trim();
  if (habitText !== '') {
    const li = document.createElement('li');
    li.textContent = habitText;
    li.classList.add('habit-item');

    li.addEventListener('click', function() {
      li.classList.toggle('checked');
    });

    habitList.appendChild(li);
    habitInput.value = '';
  }
});

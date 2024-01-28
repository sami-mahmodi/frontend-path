let leads = ["afghanistan", "afghanistan", "afghanistan"];
const ulEl = document.getElementById('ul-el');

function save() {
  const inputEl = document.getElementById('input-el').value;
  leads.push(inputEl);

  // Clear the existing list
  ulEl.innerHTML = '';

  // Update the list with the new leads
  leads.forEach(lead => {
    let listItem = document.createElement('li');
    listItem.textContent = lead;
    ulEl.appendChild(listItem);
  });
}
// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Week Selector
const weekSelector = document.getElementById('weekSelector');
const week1Table = document.getElementById('week1');
const week2Table = document.getElementById('week2');

weekSelector.addEventListener('change', () => {
    if (weekSelector.value === 'week1') {
        week1Table.style.display = 'table';
        week2Table.style.display = 'none';
    } else {
        week1Table.style.display = 'none';
        week2Table.style.display = 'table';
    }
});
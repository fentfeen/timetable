// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
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

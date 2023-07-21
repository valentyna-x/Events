'use strict'

document.addEventListener('DOMContentLoaded', function() {
    const displayText = document.getElementById('displayText');
    let isEditing = false;
    let originalText = '';

    function switchToEditMode() {
        originalText = displayText.textContent.trim();
        displayText.innerHTML = `<textarea id="editText">${originalText}</textarea>`;
        const editTextarea = document.getElementById('editText');
        editTextarea.focus();
        editTextarea.addEventListener('keydown', handleTextareaKeys);
        isEditing = true;
    }

    function switchToDisplayMode() {
        const editTextarea = document.getElementById('editText');
        const editedText = editTextarea.value.trim();
        displayText.innerHTML = editedText;
        isEditing = false;
    }

    function handleTextareaKeys(event) {
        if (event.key === 'Enter' && event.ctrlKey) {
            event.preventDefault();
            switchToDisplayMode();
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'e' && event.ctrlKey && !isEditing) {
            event.preventDefault();
            switchToEditMode();
        } else if (event.key === 's' && event.ctrlKey && isEditing) {
            event.preventDefault();
            switchToDisplayMode();
        }
    });
});

// -------------Task 2----------------

function sortTable(columnAttribute) {
    const table = document.getElementById('Table_data');
    const rows = Array.from(table.rows).slice(1); 
    const isFigure = columnAttribute === 0 || columnAttribute === 2;

    rows.sort((a, b) => {
        const aValue = a.cells[columnAttribute].textContent;
        const bValue = b.cells[columnAttribute].textContent;

        if (isFigure) {
            return +aValue - +bValue; // конвертує величини в цифри
        } else {
            return aValue.localeCompare(bValue); // Використовує стандартне порівняння рядків для нечислових значень
        }
    });

    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';

    rows.forEach(row => {
        tbody.appendChild(row);
    });
}

//------------------- Task 3-------------


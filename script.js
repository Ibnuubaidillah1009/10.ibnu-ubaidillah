document.getElementById('add-button').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    if (todoText) {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');

        li.textContent = todoText;

        // Checkbox untuk menandai tugas selesai
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            li.classList.toggle('completed', checkbox.checked);
        });

        // Tombol untuk menghapus tugas
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        li.prepend(checkbox);
        li.appendChild(deleteButton);
        todoList.appendChild(li);

        // Kosongkan input setelah menambahkan tugas
        input.value = '';
    } else {
        alert("Tugas tidak boleh kosong!");
    }
});
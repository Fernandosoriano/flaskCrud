const btnDelete = document.querySelectorAll('.btn-delete');
if (btnDelete) {
    const btnArray = Array.from(btnDelete); // transformas la lista de nodos, con esta clase en un array
    btnArray.forEach((btn) => { // recorres todos los botones con esta clase
        btn.addEventListener('click', (e) => {
            if (!confirm('Are you sure you want to delete it?')) {
                e.preventDefault();
            }
        });
    })
}
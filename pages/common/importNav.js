function importNav(selected) {
    fetch('../common/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;

            // Set the selected item
            document.getElementById(selected).classList.add('selected');
        });
}

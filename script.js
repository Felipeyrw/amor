document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');

    dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
        this.classList.toggle('open');
    });

    document.addEventListener('click', function() {
        dropdown.classList.remove('open');
    });
});
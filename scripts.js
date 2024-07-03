// scripts.js
document.addEventListener('DOMContentLoaded', (event) => {
    function openModal(modalId) {
        var modal = document.getElementById(modalId);
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        modal.querySelector('.close').focus();
    }

    function closeModal(modalId) {
        var modal = document.getElementById(modalId);
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    }

    document.getElementById('openModalBtn1').onclick = function() {
        openModal('myModal1');
    };

    document.getElementById('openModalBtn2').onclick = function() {
        openModal('myModal2');
    };

    var closeBtns = document.querySelectorAll('.close');
    closeBtns.forEach(function(btn) {
        btn.onclick = function() {
            closeModal(btn.getAttribute('data-modal'));
        };
    });

    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target.id);
        }
    };

    window.onkeydown = function(event) {
        if (event.key === 'Escape') {
            closeBtns.forEach(function(btn) {
                var modalId = btn.getAttribute('data-modal');
                closeModal(modalId);
            });
        }
    };
});

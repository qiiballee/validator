document.addEventListener('DOMContentLoaded', () => {
    const statusButtons = document.querySelectorAll('.statusButton');

    statusButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Toggle button state
            if (button.textContent === 'SEDANG MENGECEK') {
                button.textContent = 'TIDAK SEDANG MENGECEK';
                button.classList.remove('on');
                button.classList.add('off');
            } else {
                button.textContent = 'SEDANG MENGECEK';
                button.classList.remove('off');
                button.classList.add('on');
            }

            // Simulate sending status to a server or updating other users
            updateStatus(button.parentElement.id, button.textContent);
        });
    });

    function updateStatus(userId, status) {
        // Simulate sending the updated status to a server or other users
        console.log(`User ${userId} status updated to ${status}`);
        // You can use WebSockets or other methods to broadcast this update
    }
});

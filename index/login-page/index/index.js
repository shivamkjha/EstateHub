
    document.addEventListener('DOMContentLoaded', function() {
        const items = document.querySelectorAll('.items');

        items.forEach(function(item) {
            item.addEventListener('click', function() {
                const target = document.querySelector(this.dataset.target);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 1000 });
                }
            });
        });
    });

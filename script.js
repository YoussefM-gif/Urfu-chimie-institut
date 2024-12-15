document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.switcher button');
    const contentBlocks = document.querySelectorAll('.content-block');

    // Gestion des boutons de basculement
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const target = button.getAttribute('data-target');
            contentBlocks.forEach(block => {
                block.classList.remove('active');
                if (block.getAttribute('id') === target) {
                    block.classList.add('active');
                }
            });
        });
    });

    // Gestion du défilement pour le header et le footer
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (currentScrollY < lastScrollY) {
            header.style.transform = 'translateY(0)'; // Show header
            footer.style.transform = 'translateY(100%)'; // Hide footer
        } else {
            header.style.transform = 'translateY(-100%)'; // Hide header
            footer.style.transform = 'translateY(0)'; // Show footer
        }

        lastScrollY = currentScrollY;
    });

    // Animation on click for .p3
    const p3Element = document.querySelector('.p3');
    p3Element.addEventListener('click', () => {
        p3Element.style.animation = 'none'; // Reset animation
        p3Element.offsetHeight; // Trigger reflow
        p3Element.style.animation = 'animate 500ms ease-out'; // Apply animation
    });

    // Gestion du toggle switch
    const toggleSwitch = document.querySelector('.toggle-switch input');
    const budgetTexts = document.querySelectorAll('.budget-text');
    const contractTexts = document.querySelectorAll('.contract-text');
    const stepContent = document.querySelector('.step-content');

    toggleSwitch.addEventListener('change', () => {
        const isContract = toggleSwitch.checked;

        // Gestion de la visibilité
        budgetTexts.forEach(text => {
            if (isContract) {
                text.classList.add('hidden'); // Ajouter la classe 'hidden'
                text.classList.remove('visible');
            } else {
                text.classList.add('visible'); // Ajouter la classe 'visible'
                text.classList.remove('hidden');
            }
        });

        contractTexts.forEach(text => {
            if (isContract) {
                text.classList.add('visible'); // Ajouter la classe 'visible'
                text.classList.remove('hidden');
            } else {
                text.classList.add('hidden'); // Ajouter la classe 'hidden'
                text.classList.remove('visible');
            }
        });

        // Forcer le reflow pour garantir les transitions
        stepContent.offsetHeight;
    });
});

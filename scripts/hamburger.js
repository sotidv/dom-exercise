// export default function hamburgerMenu(panelBtn, panel, menuLink) {
//     const d = document;
//     d.addEventListener('click', e => {
//         if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
//             d.querySelector(panel).classList.toggle('is-active')
//             d.querySelector(panelBtn).classList.toggle('is-active')
//         }

//         if (e.target.matches(menuLink)) {
//             d.querySelector(panel).classList.remove('is-active')
//             d.querySelector(panelBtn).classList.remove('is-active')
//         }
//     })

// }

export default function hamburgerMenu(panelBtnSelector, panelSelector, menuLinkSelector) {
    const panelBtn = document.querySelector(panelBtnSelector);
    const panel = document.querySelector(panelSelector);
    const menuLinks = document.querySelectorAll(menuLinkSelector);

    function toggleMenu() {
        panel.classList.toggle('is-active');
        panelBtn.classList.toggle('is-active');
    }

    function closeMenu() {
        panel.classList.remove('is-active');
        panelBtn.classList.remove('is-active');
    }

    // Delegación de eventos al panelBtn
    panelBtn.addEventListener('click', (e) => {
        if (e.target === panelBtn || panelBtn.contains(e.target)) {
            toggleMenu();
        }
    });

    // Cierre del menú al hacer clic en los enlaces del menú
    menuLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    // Cierre del menú al hacer clic fuera del panel
    document.addEventListener('click', (e) => {
        if (!panel.contains(e.target) && !panelBtn.contains(e.target)) {
            closeMenu();
        }
    });
}

// Play/Pause scroll-text-wrapper
const btn = document.querySelector('.toggleText');
const container = document.querySelector('.scroll-text-main');

 btn.addEventListener('click', function() {
    document.body.classList.toggle('running');
});

// Light/Dark Mode
const themeBtn = document.querySelector('.light-nav');
    
if (themeBtn) {
    themeBtn.addEventListener('click', function() {

        document.body.classList.toggle('light-mode');

        const icon = this.querySelector('.material-symbols-outlined');
        if (document.body.classList.contains('light-mode')) {
            icon.innerHTML = 'dark_mode'; 
        } else {
            icon.innerHTML = 'light_mode'; 
        }

        console.log("Switching theme...");
    });
}
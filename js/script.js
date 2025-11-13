
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header-nav')
    const threshold = 800
    let lastKnownScrollY = 0
    let ticking = false

    if (!header) return
    function onscroll() {
        lastKnownScrollY = window.scrollY || window.pageYOffset
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateHeader(lastKnownScrollY)
                ticking = false
            })
            ticking = true
        }
    }

    function updateHeader(scrollPosition) {
            if (scrollPosition >= threshold) {
                header.classList.add('scrolled')
            } else {
                header.classList.remove('scrolled')
            }
        }

    updateHeader(window.scrollY || window.pageYOffset)
    window.addEventListener('scroll', onscroll, { passive: true })
})
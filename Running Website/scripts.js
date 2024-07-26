document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section')
    const sidebarMarkers = document.querySelectorAll('.sidebar ul li a')

    window.onscroll= ()=> {
        let current = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.pageYOffset;

            if (scrollPosition >= sectionTop - 60 && scrollPosition < sectionTop + sectionHeight - 60) {
                current = section.getAttribute("id");
            }
            console.log(`Scroll Position: ${scrollPosition}, Section Top: ${sectionTop}, Section Height: ${sectionHeight}`);
        })

        sidebarMarkers.forEach((marker) => {
            marker.classList.remove('active');
            if (marker.getAttribute('href').includes(current)) {
                marker.classList.add('active')
            }
        })
    }
})
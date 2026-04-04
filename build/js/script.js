document.addEventListener('DOMContentLoaded', function() {
    navegacionFija()
    crearGaleria()
    resaltarEnlace()
    scrollNav()
})

function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    document.addEventListener('scroll', function() {
        if(sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    })
}

function crearGaleria() {

    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen Galería'

        // Event Handler
        imagen.onclick = function() {
            mostrarImagen(i)
        }
        
        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg`
    imagen.alt = 'Imagen Galería'

    // Generar Modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    // Botón cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)

    // Agregar al HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)

}

function cerrarModal() {

    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')

    setTimeout(() => {
        modal?.remove()

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 500);
}

function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if(window.scrollY >= (sectionTop - sectionHeight / 3 ) ) {
                actual = section.id
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual) {
                link.classList.add('active')
            }
        })
    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior: 'smooth'})
        })
    })
}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgbmF2ZWdhY2lvbkZpamEoKVxyXG4gICAgY3JlYXJHYWxlcmlhKClcclxuICAgIHJlc2FsdGFyRW5sYWNlKClcclxuICAgIHNjcm9sbE5hdigpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBuYXZlZ2FjaW9uRmlqYSgpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKVxyXG4gICAgY29uc3Qgc29icmVGZXN0aXZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb2JyZS1mZXN0aXZhbCcpXHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYoc29icmVGZXN0aXZhbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPCAxKSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhckdhbGVyaWEoKSB7XHJcblxyXG4gICAgY29uc3QgQ0FOVElEQURfSU1BR0VORVMgPSAxNlxyXG4gICAgY29uc3QgZ2FsZXJpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxlcmlhLWltYWdlbmVzJylcclxuXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDw9IENBTlRJREFEX0lNQUdFTkVTOyBpKyspIHtcclxuICAgICAgICBjb25zdCBpbWFnZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKVxyXG4gICAgICAgIGltYWdlbi5zcmMgPSBgc3JjL2ltZy9nYWxsZXJ5L2Z1bGwvJHtpfS5qcGdgXHJcbiAgICAgICAgaW1hZ2VuLmFsdCA9ICdJbWFnZW4gR2FsZXLDrWEnXHJcblxyXG4gICAgICAgIC8vIEV2ZW50IEhhbmRsZXJcclxuICAgICAgICBpbWFnZW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBtb3N0cmFySW1hZ2VuKGkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbGVyaWEuYXBwZW5kQ2hpbGQoaW1hZ2VuKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3N0cmFySW1hZ2VuKGkpIHtcclxuICAgIGNvbnN0IGltYWdlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lNRycpXHJcbiAgICBpbWFnZW4uc3JjID0gYHNyYy9pbWcvZ2FsbGVyeS9mdWxsLyR7aX0uanBnYFxyXG4gICAgaW1hZ2VuLmFsdCA9ICdJbWFnZW4gR2FsZXLDrWEnXHJcblxyXG4gICAgLy8gR2VuZXJhciBNb2RhbFxyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKVxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKVxyXG4gICAgbW9kYWwub25jbGljayA9IGNlcnJhck1vZGFsXHJcblxyXG4gICAgLy8gQm90w7NuIGNlcnJhciBtb2RhbFxyXG4gICAgY29uc3QgY2VycmFyTW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKVxyXG4gICAgY2VycmFyTW9kYWxCdG4udGV4dENvbnRlbnQgPSAnWCdcclxuICAgIGNlcnJhck1vZGFsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1jZXJyYXInKVxyXG4gICAgY2VycmFyTW9kYWxCdG4ub25jbGljayA9IGNlcnJhck1vZGFsXHJcblxyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoaW1hZ2VuKVxyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoY2VycmFyTW9kYWxCdG4pXHJcblxyXG4gICAgLy8gQWdyZWdhciBhbCBIVE1MXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWhpZGRlbicpXHJcbiAgICBib2R5LmFwcGVuZENoaWxkKG1vZGFsKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY2VycmFyTW9kYWwoKSB7XHJcblxyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsPy5yZW1vdmUoKVxyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKVxyXG4gICAgfSwgNTAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzYWx0YXJFbmxhY2UoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKVxyXG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmVnYWNpb24tcHJpbmNpcGFsIGEnKVxyXG5cclxuICAgICAgICBsZXQgYWN0dWFsID0gJyc7XHJcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCggc2VjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcFxyXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uSGVpZ2h0ID0gc2VjdGlvbi5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgaWYod2luZG93LnNjcm9sbFkgPj0gKHNlY3Rpb25Ub3AgLSBzZWN0aW9uSGVpZ2h0IC8gMyApICkge1xyXG4gICAgICAgICAgICAgICAgYWN0dWFsID0gc2VjdGlvbi5pZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbmF2TGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICBpZihsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpID09PSAnIycgKyBhY3R1YWwpIHtcclxuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxOYXYoKSB7XHJcbiAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZlZ2FjaW9uLXByaW5jaXBhbCBhJylcclxuXHJcbiAgICBuYXZMaW5rcy5mb3JFYWNoKCBsaW5rID0+IHtcclxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uU2Nyb2xsID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJylcclxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VjdGlvblNjcm9sbClcclxuXHJcbiAgICAgICAgICAgIHNlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJ30pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0iXSwiZmlsZSI6InNjcmlwdC5qcyJ9

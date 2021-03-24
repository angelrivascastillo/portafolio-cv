// ***menu*** 
((d) => {
    const $btn = d.querySelector('.menu-btn'),
        $menu = d.querySelector('.menu')
    $btn.addEventListener('click', e => {
        $btn.firstElementChild.classList.toggle('none')
        $btn.lastElementChild.classList.toggle('none')
        $menu.classList.toggle('is-active')
    })
    d.addEventListener('click', e => {
        if (!e.target.matches('.menu a')) return false

        $btn.firstElementChild.classList.remove('none')
        $btn.lastElementChild.classList.add('none')
        $menu.classList.remove('is-active')
    }
    )

})(document);

// contact form 
((d) => {
    const $form = d.querySelector('.contact-form'),
        $loader = d.querySelector('.contact-form-loader'),
        $response = d.querySelector('.contact-form-response');

    $form.addEventListener('submit', e => {
        e.preventDefault()
        $loader.classList.remove('none')
        fetch('https://formsubmit.co/ajax/angelrivascastillo1@gmail.com', {
            method: 'POST',
            body: new FormData(e.target)
        })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                console.log(json);
                location.hash = '#gracias'
                $form.reset()

            })
            .catch(err => {
                let message = err.statusText || 'Ocurrrió un error al enviar, intenta nuevamente'
                $response.querySelector('h3').innerHTML = `Error ${err.status}: ${message}`
                $loader.classList.add('none')
            })
            .finally(() => {
                $loader.classList.add('none')
                setTimeout(() => {
                    location.hash = '#close'
                }, 3000);

            })
    })
})(document);
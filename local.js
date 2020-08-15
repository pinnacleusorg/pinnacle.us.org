var bs = require('browser-sync').create();

bs.init({
    port: 9000,
    watch: true,
    server: true,
    online: false,
    serveStatic: ['assets'],
    rewriteRules: [
        {
            match: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
            replace: '/cdn/bootstrap.min.css'
        },
        {
            match: 'https://code.jquery.com/jquery-3.4.1.min.js',
            replace: '/cdn/jquery-3.4.1.min.js'
        },
        {
            match: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js',
            replace: '/cdn/gsap.min.js'
        },
        {
            match: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/ScrollTrigger.min.js',
            replace: '/cdn/ScrollTrigger.min.js'
        }
    ]
});

module.exports = {
    apps : [{
        name: 'pinnacle-home',
        script: 'app.js',
        watch: false,
        restart_delay: 5000,
        env: {
            "PORT": 9000,
            "NODE_ENV": "development",
        },
        env_production : {
            "PORT": 9001,
            "NODE_ENV": "production"
        }

    }]
};

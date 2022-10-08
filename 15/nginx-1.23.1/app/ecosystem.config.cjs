module.exports = {
    apps: [
        {
            name: 'server',
            script: 'src/index.js',
            env: {
                PORT: 8080
            }
        },
        {
            name: 'server1',
            script: 'src/index.js',
            env: {
                PORT: 8081
            }
        },
        {
            name: 'server2',
            script: 'src/index.js',
            env: {
                PORT: 8082
            },
            exec_mode: 'cluster',
            instances: 4,
            node_args: '--harmony'
        }
    ]
};

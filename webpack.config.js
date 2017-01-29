module.exports = {
    entry: [
        './src/index.jsx'
    ],
    module:{
        loaders:[
            {
                exclude: '/node_modules/',
                loader:'babel',
                query: { presets: [ 'react', 'es2015'] }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        output: __dirname
    },
    resolve:{ extensions: [ '','.js', '.jsx'] }
}
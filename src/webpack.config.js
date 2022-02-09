const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path') /* aqui eu consigo recuperar o path de onde está este arquivo para ficar compatível com vários SO.*/

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname,'src','index.js'), //entry indica onde está o arquivo principal da aplicação./
    output: { //aqui indica onde está o arquivo de saída da aplicação./
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js','.jsx'], //como estou usando arquivos .jsx preciso falar para aplicação que é para ler arquivos .jsx/
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [ //crio um array de regras para verificar se o arquivo é um arquivo .jsx conforme essa regra criada./
            {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: 'babel-loader',
            }
        ],   
    }
};
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path') /* aqui eu consigo recuperar o path de onde está este arquivo para ficar compatível com vários SO.*/
const isDevelopment = true;
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production', 
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry:  //entry indica onde está o arquivo principal da aplicação./
        path.resolve(__dirname, 'src', 'index.tsx'), 
    output: { //aqui indica onde está o arquivo de saída da aplicação./
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'        
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], //como estou usando arquivos .jsx preciso falar para aplicação que é para ler arquivos .jsx/
    },
    devServer: {
        static:{
            directory: path.resolve(__dirname, 'public'), 
            hot: true       
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: {
        rules: [ //crio um array de regras para verificar se o arquivo é um arquivo .jsx conforme essa regra criada./
            {
            test: /\.(j|t)sx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                  plugins: [
                    isDevelopment && require.resolve('react-refresh/babel')
                  ].filter(Boolean)
                }
              }
            },
            {
              test: /\.css$/,
              exclude: /node_modules/,
              use: ['style-loader', 'css-loader']
            },
            {
              test: /\.scss$/,
              exclude: /node_modules/,
              use: ['style-loader', 'css-loader', 'sass-loader']
            }
          ],
        }
  
    }
};
/*******************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under Mozilla Public License Version 2.0
 * Assignment # 19 - Progressive Web Applications (PWA) 
 * Code provided by Carleton University as startup
 * 
 * Date : 12/30/2023 8:12:48 AM
 * Purpose: 
 *******************************************************************/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest, GenerateSW } = require('workbox-webpack-plugin');

// Todo-done: Add and configure workbox plugins for a service worker and manifest file.
// Todo-done: Add CSS loaders and babel to webpack.
module.exports = () => {
     return {
          mode: 'development',
          entry: {
               main: './src/js/index.js',
               install: './src/js/install.js'
          },
          output: {
               filename: '[name].bundle.js',
               path: path.resolve(__dirname, 'dist'),
               clean: true,
          },
          plugins: [
               new HtmlWebpackPlugin({
                    template: './index.html',
                    title: 'Jate Text Editor'
               }),
               new GenerateSW(),
               new WebpackPwaManifest({
                    name: 'Just Another Text Editor (Jate)',
                    short_name: 'JateEdit',
                    description: 'Next Generation Text Editor!',
                    display: 'standalone',
                    background_color: '#7eb4e2',
                    theme_color: '#7eb4e2',
                    start_url: './',
                    publicPath: './',
                    inject: true,
                    fingerprints: false,
                    icons: [
                         {
                              src: path.resolve('src/images/logo.png'),
                              sizes: [96, 128, 192, 256, 384, 512],
                              destination: path.join('assets', 'icons'),
                         },
                    ],
                    screenshots: [
                         {
                              src: path.resolve('src/images/logo.png'),
                              sizes: "192x192",
                              destination: path.join('assets', 'screenshots'),
                              description: "J.A.T.E.",
                         }
                    ]
               }),
          ],
          module: {
               // CSS loaders
               rules: [
                    {
                         test: /\.css$/i,
                         use: ['style-loader', 'css-loader'],
                    },
                    {
                         test: /\.html$/i,
                         use: ['html-loader']
                    },
                    {
                         test: /\.m?js$/,
                         exclude: /node_modules/,
                         // We use babel-loader in order to use ES6.
                         use: {
                              loader: 'babel-loader',
                              options: {
                                   presets: ['@babel/preset-env'],
                                   plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
                              },
                         },
                    },
               ],
          },
     };
};

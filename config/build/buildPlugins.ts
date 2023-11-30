import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { Configuration } from "webpack";
import { IBuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins(options: IBuildOptions):Configuration['plugins'] {
    const isDev = options.mode === 'development'
    const isProd = !isDev
    const isAnalyzer = options.analyzer === true

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: options.paths.html}),
    ]

    if(isDev) {
        plugins.push(new webpack.ProgressPlugin())
    }

    if(isProd){
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })) 
    }

    if(isAnalyzer){
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins
}
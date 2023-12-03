import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { IBuildMode, IBuildPaths, IBuildPlatform } from './config/build/types/types';
import path from 'path';

interface IEnvs {
    mode?: IBuildMode
    port?: number
    analyzer?: boolean
    platform?: IBuildPlatform
}

export default (env: IEnvs) => {
    const paths: IBuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public')
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer ?? false,
        platform: env.platform ?? 'desktop'
    })

    return config;
}
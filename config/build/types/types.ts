export interface IBuildPaths {
    entry: string
    html: string
    output: string
}

export type IBuildMode = 'production' | 'development';

export interface IBuildOptions {
    port: number
    paths: IBuildPaths
    mode: IBuildMode
}
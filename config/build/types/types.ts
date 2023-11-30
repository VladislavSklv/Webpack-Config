export interface IBuildPaths {
    entry: string
    html: string
    output: string
    src: string
}

export type IBuildMode = 'production' | 'development';

export interface IBuildOptions {
    port: number
    paths: IBuildPaths
    mode: IBuildMode
    analyzer?: boolean
}
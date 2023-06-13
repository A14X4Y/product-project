import path from 'path';
import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const {
    mode,
    paths: { entry, html, output },
  } = options;

  return {
    mode,
    entry,
    output: {
      filename: '[name].[contenthash].js',
      path: output,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}

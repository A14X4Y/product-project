import webpack from 'webpack';
// конфигируруем лоадера, они предназначены,чтобы о рабатывать файлы за рамки js(svg,ts,png и тюд)

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  return [typescriptLoader];
}

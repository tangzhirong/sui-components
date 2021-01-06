/*
 * @Date: 2018-12-26 14:03:10
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-01-06 16:38:12
 */

const path = require('path');
const fsExtra = require('fs-extra');
const babel = require('@babel/core');
const read = require('fs-readdir-recursive');

const esRoot = path.resolve(__dirname, 'es');
const libRoot = path.resolve(__dirname, 'lib');

const suiRoot = path.resolve(__dirname, '..', 'sui-core/src/core');

const build = () => {
  fsExtra.emptyDirSync(libRoot);
  fsExtra.emptyDirSync(esRoot);

  const pathList = read(suiRoot);

  pathList.map(item => {
    fsExtra.copySync(path.resolve(suiRoot, item), path.resolve(esRoot, item));

    if (item.match('.js')) {
      const result = babel.transformFileSync(path.resolve(suiRoot, item), {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              corejs: false,
              helpers: true,
              regenerator: false,
              useESModules: false
            }
          ],
          [
            '@babel/plugin-proposal-decorators',
            {
              legacy: true
            }
          ],
          'transform-remove-console',
          'transform-class-properties',
          [
            'import',
            {
              libraryName: 'antd',
              libraryDirectory: 'lib',
              style: true
            }
          ]
        ]
      });
      fsExtra.outputFileSync(
        path.resolve(libRoot, item),
        result.code
        // .replace(/\.less/g, '.css')
      );
    }

    /**
     * remove less compile
     * because the behavior cause user can't custom theme by webpack less-loader variable config.
     */
    // else if (item.match('.less')) {
    // const compiler = webpack({
    //   mode: 'production',
    //   entry: path.resolve(suiRoot, item),
    //   output: { path: libRoot },
    //   module: {
    //     rules: [
    //       {
    //         test: /\.less$/,
    //         use: [
    //           MiniCssExtractPlugin.loader,
    //           'css-loader',
    //           { loader: 'less-loader', options: { javascriptEnabled: true } }
    //         ]
    //       }
    //     ]
    //   },
    //   plugins: [
    //     new MiniCssExtractPlugin({
    //       filename: item.replace('.less', '.css')
    //     })
    //   ]
    // });
    // compiler.run((err, stats) => {
    //   if (err || stats.hasErrors()) {
    //     console.log(
    //       stats.toString({
    //         chunks: false,
    //         colors: true
    //       })
    //     );
    //   }
    // });
    // }
    else {
      fsExtra.copySync(
        path.resolve(suiRoot, item),
        path.resolve(libRoot, item)
      );
    }
  });
};

build();

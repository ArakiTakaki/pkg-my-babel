const { resolve } = require('path');
const fs = require('fs');
const PACKAGE_NAME = 'pkg-araki-presert';

const a = require(resolve(__dirname, '../package.json'));

// TODO: package root のパッケージJSONのdevDependenciesに対して追加処理を行う機構を作成する。
// 既にバージョンが高い物がる場合に関してはそちらをしようするようにもしなればいけない様な気がする.
if (a.devDependencies != null) {
  delete a.devDependencies[PACKAGE_NAME];
  console.log(a.devDependencies.gomi);
}

if (a.dependencies != null) {
  delete a.dependencies[PACKAGE_NAME];
  console.log(a.dependencies.gomi);
}

fs.writeFile('test.json', JSON.stringify(a, null, 2), err => {
  if (err) {
    console.error('書き込めなかった・・・・。');
  }
  console.log('OK');
});
// fs.writeFile('sample.json', JSON.stringify(a));

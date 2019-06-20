
// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
// const req = require.context('.', true, /\.\/[^/]+\/index\.js$/);

const req = require.context('.', true, /^(.*index).*\.js$/);


req.keys().forEach((key) => {

  // const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
  const componentName = key.replace(/[\W_-]/g, '').replace('indexjs', '');
  // console.log('componentName', componentName2)
  module.exports[componentName] = req(key).default;
})
;

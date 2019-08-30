const package = require('./package.json');
const packageTheme = require('./themes/mew5/package.json');
const packageJson = require('package-json');
const SAFE_TIME = 1000 * 1 * 60 * 60 * 24 * 7; //7days
const EXCEPTIONS = [];
const CUSTOM_DIST = {
  ['babel-core']: 'bridge'
};


const runCheck = (packages) => {
  return new Promise((resolve) => {
    const ALL_PACKAGES = Object.assign(
      {},
      packages.dependencies,
      packages.devDependencies
    );

    const names = Object.keys(ALL_PACKAGES);
    let updatesFound = false;
    const looper = () => {
      if (!names.length) {
        if (updatesFound) {
          resolve(false);
          return;
        } //process.exit(1);
        else {
          resolve(true);
          return;
        } //process.exit(0);
      }
      const _name = names.shift();
      if (EXCEPTIONS.includes(_name)) return looper();
      packageJson(_name, {
        fullMetadata: true,
        allVersions: true
      })
        .then(info => {
          const latestVersion = info['dist-tags'][CUSTOM_DIST[_name] || 'latest'];
          const latestVersionTime = info['time'][latestVersion];
          if (
            ![latestVersion, `^${latestVersion}`, `~${latestVersion}`].includes(ALL_PACKAGES[_name]) &&
            new Date(latestVersionTime).getTime() < new Date().getTime() - SAFE_TIME
          ) {
            console.error(
              'new update found',
              _name,
              ALL_PACKAGES[_name],
              latestVersion,
              latestVersionTime
            );
            updatesFound = true;
          }
        })
        .then(looper);
    };
    looper();
  });

};

runCheck(package)
  .then(res1 => {
    runCheck(packageTheme)
      .then(res2 => {
        if (!res1 || !res2) process.exit(1);
        else process.exit(0);
      });
  });
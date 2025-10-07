const fs = require('fs');
const path = require('path');

// Function for updating the version
function bumpVersion(version) {
  let [major, minor, patch] = version.split('.').map(Number);

  patch += 1;

  if (patch > 9) {
    patch = 0;
    minor += 1;
  }

  if (minor > 9) {
    minor = 0;
    major += 1;
  }

  return `${major}.${minor}.${patch}`;
}

// script enter-point
// declaring paths and new version
const pkgPath = path.resolve(__dirname, '../package.json');
const lockPath = path.resolve(__dirname, '../package-lock.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const newVersion = bumpVersion(pkg.version);

// now updating of package version
pkg.version = newVersion;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');

if (fs.existsSync(lockPath)) {
  // also updating of lock file version
  const lock = JSON.parse(fs.readFileSync(lockPath, 'utf8'));
  lock.version = newVersion;

  if (lock.packages && lock.packages['']) {
    lock.packages[''].version = newVersion;
  }

  fs.writeFileSync(lockPath, JSON.stringify(lock, null, 2) + '\n', 'utf8');
}

// some log info
console.log(`[Build status]: build #${newVersion} is ready now`);

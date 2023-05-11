const { execSync } = require('node:child_process')

exports.dev = async () => {
  await execSync('cross-env NODE_ENV=dev rollup --config rollup.config.ts --configPlugin typescript --watch', {
    stdio: 'inherit',
  })
}

exports.build = async () => {
  await execSync('cross-env NODE_ENV=prod rollup --config rollup.config.ts --configPlugin typescript', {
    stdio: 'inherit',
  })
}

exports.docs_dev = async () => {
  await execSync('pnpm run -r --filter docs dev', { stdio: 'inherit' })
}

exports.docs_build = async () => {
  await execSync('pnpm run --filter=docs build', { stdio: 'inherit' })
}

exports.release = async () => {
  await execSync('esno ./scripts/release.ts', { stdio: 'inherit' })
}

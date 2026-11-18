#!/usr/bin/env bash
# release.sh X.Y.Z - build, tag, push to Artifacts, mirror to the public GitHub repo (jsDelivr serves the tag).
set -euo pipefail
v="${1:?usage: scripts/release.sh X.Y.Z}"
cd "$(dirname "$0")/.."
sed -i '' -E "s/widget-parts [0-9]+\.[0-9]+(\.[0-9]+)?/widget-parts $v/" wp.js
npx -y esbuild@0.24.0 wp.js --minify --outfile=wp.min.js --log-level=warning
node scripts/check.mjs
sed -i '' -E "s#widget-parts@[0-9]+\.[0-9]+\.[0-9]+#widget-parts@$v#g" README.md
git add -A && git commit -qm "Release $v" && git tag "v$v"
cfgit push
cfmirror own/widget-parts workflowcat/widget-parts
echo "https://cdn.jsdelivr.net/gh/workflowcat/widget-parts@$v/wp.min.js"

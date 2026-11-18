# widget-parts

Public library: JSON in, chat widget part out. Everything here is public - no names, clients or paths in code or samples.

- Edit `wp.js`. Add a sample for every new part to `examples/gallery.json`.
- Check: `node scripts/check.mjs` (renders every sample). Look at `examples/preview.html` in light and `#dark`.
- Release: `scripts/release.sh X.Y.Z` - builds `wp.min.js`, tags, `cfgit push`, mirrors to github.com/workflowcat/widget-parts. jsDelivr serves the tag; a tag never changes, so bump the version for every fix.

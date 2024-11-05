# `npm run build`

- Runs `npm run build` on all `sites/*`
- This generates a `dist` golder in each `site`

# `npm run hoist`

- Commands each `site` to copy its `dist` folder into the root `dist`
- Each `site` should respectively copy itself into a folder of its name
- Example `sites/eleventy` will become `dist/eleventy`
- Each site is responsible for its `hoist` command including the path

# `npm run serve`

- Completely rebuilds every site and generates a root `dist` folder
- Uses `npm run build/hoist/reset` to do all this
- Then runs `http-server` and makes sources viewable
- The final intent is to be able to seamplessly switch between frameworks
- With the static site at the root for best SEO readability
- Site should be able to live on gitpages and just be routed in via Route53

# `npm run reset`

- Runs `reset` on each `site`
- Removes `node_modules` and re-installs via `npm i`
- Removes `dist` folders and creates a placeholder
- Does not generate any code or run compilers
- Used to clear the pipeline of all artifacts

# `npm run deploy` 

- TBD...
- Deploys site to GithubPages
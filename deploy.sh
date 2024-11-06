# Switch to deployable branch
git checkout public

# Create pages
npm run reset
npm run build
npm run hoist

# Remove all unusable parts
rm -rf node_modules
rm -rf sites
rm -rf .gitignore
rm -rf content.json
rm -rf LOG.md
rm -rf package.json
rm -rf package-lock.json
rm -rf README.md

# Hoist dist to root level
mv dist/* .
rm -rf dist

# Push to pages
git add .
git commit -m "[automated] build generated"
git push

# Completing
git checkout main

ecoh "-------------------------------------------"
echo "deployment completed, we are back on branch main"
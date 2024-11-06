# Switch to deployable branch
git checkout gh-pages
git merge main

# Create pages
npm run reset
npm run build
npm run hoist

# Remove .gitignore so we can push dist folder one time
rm .gitignore

# Push to pages
git add ./dist
git commit -m "[automated] build generated"
git push

# Restore state
git reset --hard

# Completing
git checkout main

echo "------------------------------------------------"
echo "deployment completed, we are back on branch main"
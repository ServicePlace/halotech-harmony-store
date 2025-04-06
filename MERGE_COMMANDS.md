# Merge All Branches to Main

# 1. Ensure you're on the main branch
git checkout main

# 2. Get all branches
git fetch --all

# 3. Merge current work into main
git add .
git commit -m "Full project setup with all components and configurations"

# 4. Delete all other branches except main
git branch | grep -v "main" | xargs git branch -D

# 5. Force push main as the only branch
git push -f origin main

# 6. Remove any other remote branches
git push origin --delete $(git branch -r | grep -v "main" | sed 's/origin\///')

# 7. Set main as the default branch
git symbolic-ref HEAD refs/heads/main

# 8. Verify only main exists
git branch -a

# Build and Development Commands

## Initial Setup

```bash
# Clone the repository
git clone <repository-url>
cd halotech-harmony-store

# Create development branch
git checkout -b development

# Install dependencies (regular)
npm install

# Install dependencies (if facing peer dependency issues)
npm install --legacy-peer-deps

# Install dependencies (force, only if necessary)
npm install --force
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Git Commands

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "your commit message"

# Push to development branch
git push origin development

# Switch to main branch
git checkout main

# Merge development into main
git merge development

# Force push to main (use with caution)
git push -f origin main
```

## Troubleshooting Commands

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install

# Check TypeScript version
npx tsc --version

# Run TypeScript compiler
npx tsc

# Build with verbose output
npm run build -- --verbose
```

## Dependency Management

```bash
# Update all dependencies
npm update

# Install specific dependency
npm install <package-name>

# Install dev dependency
npm install -D <package-name>

# Remove dependency
npm uninstall <package-name>
```

# Build Commands

## Build Commands
```bash
# NPM Build
npm install
npm run build

# Bun Build
bun install
bun run build

# Clean and Rebuild
npm run clean
npm run build
# or
bun run clean
bun run build
```

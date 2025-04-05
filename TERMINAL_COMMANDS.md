# Terminal Commands Guide

## Initial Setup

```bash
# Update package lists
sudo apt-get update

# Install Node.js (Option 1)
sudo apt-get install nodejs -y
sudo apt-get install npm -y

# OR Install N|Solid Runtime (Option 2)
sudo apt-get install nsolid -y

# Verify installations
node --version
npm --version

# Install development tools
sudo apt-get install build-essential -y
```

## Project Setup

```bash
# Navigate to project directory
cd /workspaces/halotech-harmony-store

# Initialize git repository (if not already done)
git init

# Install project dependencies
npm install

# Create necessary environment files
cp .env.example .env
```

## Development Commands

```bash
# Start development server
npm run dev

# Build project
npm run build

# Preview production build
npm run preview

# Clean install (if having issues)
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## Common Issues & Solutions

```bash
# Fix permissions issues
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP .

# Clear npm cache
npm cache clean --force

# Update npm
sudo npm install -g npm@latest

# Fix node-gyp issues
sudo apt-get install python3 -y
sudo npm install -g node-gyp

# Install TypeScript globally
sudo npm install -g typescript
```

## Project Structure Commands

```bash
# Create necessary directories
mkdir -p src/{components,pages,utils,hooks,context}

# Set correct permissions
chmod 644 .env
chmod +x scripts/*.sh # If you have any shell scripts

# Check project structure
tree -I 'node_modules|dist'
```

## Git Commands

```bash
# Initialize repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Create and switch to development branch
git checkout -b development
```

## Deployment Commands

```bash
# Build for production
npm run build

# Serve production build locally
npm run preview

# Check build size
du -sh dist/
```

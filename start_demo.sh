#!/bin/bash

# SAM2 Demo Startup Script
# This script starts the SAM2 demo with all necessary environment setup

set -e

echo "🚀 Starting SAM2 Demo..."
echo "========================"

# Check if virtual environment exists
if [ ! -d "sam2_env" ]; then
    echo "❌ Virtual environment not found. Please run setup first."
    exit 1
fi

# Activate virtual environment
echo "📦 Activating virtual environment..."
source sam2_env/bin/activate

# Check if dependencies are installed
echo "🔍 Checking dependencies..."
python -c "import sam2; print('✅ SAM2 package found')" || {
    echo "❌ SAM2 package not found. Please run: pip install -e ."
    exit 1
}

# Check if frontend dependencies are installed
if [ ! -d "demo/frontend/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd demo/frontend
    yarn install
    cd ../..
fi

# Start the demo
echo "🎬 Starting demo services..."
python run_demo.py 
#!/bin/bash
cd /tmp/kavia/workspace/code-generation/creative-drawing-studio-47-56/drawing_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


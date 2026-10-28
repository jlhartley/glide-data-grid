#!/bin/bash
set -euo pipefail

# Disposable compatibility checkout only. Root overrides follow these versions.
node config/setup-react-test.cjs 19
pnpm install --no-frozen-lockfile

#!/usr/bin/env python3
"""Verify PNG files are properly created"""

import os

def verify_png(filename):
    """Check if file is a valid PNG"""
    try:
        with open(filename, 'rb') as f:
            header = f.read(8)
            # PNG signature: \x89PNG\r\n\x1a\n
            if header == b'\x89PNG\r\n\x1a\n':
                size = os.path.getsize(filename)
                print(f"✓ {filename} - Valid PNG ({size} bytes)")
                return True
            else:
                print(f"✗ {filename} - Invalid PNG signature")
                return False
    except Exception as e:
        print(f"✗ {filename} - Error: {e}")
        return False

print("Verifying PNG assets...")
all_valid = True

for filename in ['assets/icon.png', 'assets/adaptive-icon.png', 'assets/splash.png', 'assets/favicon.png']:
    if not verify_png(filename):
        all_valid = False

if all_valid:
    print("\n🎉 All PNG files are valid and ready for Expo!")
else:
    print("\n❌ Some PNG files have issues")

# Clean up this script
os.remove('verify_assets.py')
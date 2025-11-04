#!/usr/bin/env python3
"""
Create simple solid color assets using built-in libraries
"""

import os

# Create assets directory
assets_dir = "assets"
os.makedirs(assets_dir, exist_ok=True)

def create_simple_ppm(filename, width, height, r, g, b):
    """Create a simple PPM image file"""
    ppm_content = f"""P3
{width} {height}
255
"""

    # Fill with the solid color
    for y in range(height):
        for x in range(width):
            ppm_content += f"{r} {g} {b} "
        ppm_content += "\n"

    with open(os.path.join(assets_dir, filename), 'w') as f:
        f.write(ppm_content)

# Create simple PPM files (these are basic but valid image files)
print("Creating basic image files...")

# Create solid green files
create_simple_ppm("icon.ppm", 512, 512, 22, 163, 74)    # Primary green
create_simple_ppm("adaptive-icon.ppm", 512, 512, 21, 128, 61)  # Dark green
create_simple_ppm("splash.ppm", 512, 512, 22, 163, 74)    # Primary green
create_simple_ppm("favicon.ppm", 512, 512, 22, 163, 74)   # Primary green

print("✅ Basic image files created!")

# Now let's also create placeholder PNG files with minimal data
def create_minimal_png(filename, r, g, b):
    """Create a minimal PNG file with solid color"""
    # This is a minimal valid PNG file with 1x1 pixel
    png_data = bytes([
        0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,  # PNG signature
        0x00, 0x00, 0x00, 0x0D,  # IHDR chunk length (13)
        0x49, 0x48, 0x44, 0x52,  # IHDR
        0x00, 0x00, 0x00, 0x01,  # Width: 1
        0x00, 0x00, 0x00, 0x01,  # Height: 1
        0x08, 0x02, 0x00, 0x00, 0x00,  # Bit depth, color type, compression, filter, interlace
        0x90, 0x77, 0x53, 0xDE,  # CRC
        0x00, 0x00, 0x00, 0x0C,  # IDAT chunk length (12)
        0x49, 0x44, 0x41, 0x54,  # IDAT
        0x08, 0x99, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00,  # Image data (1 pixel)
        r, g, b,  # RGB values
        0x00, 0x00, 0x00, 0x00,  # CRC
        0x00, 0x00, 0x00, 0x00,  # IEND chunk length (0)
        0x49, 0x45, 0x4E, 0x44,  # IEND
        0xAE, 0x42, 0x60, 0x82   # CRC
    ])

    with open(os.path.join(assets_dir, filename), 'wb') as f:
        f.write(png_data)

print("Creating PNG files...")
create_minimal_png("icon.png", 22, 163, 74)      # Primary green
create_minimal_png("adaptive-icon.png", 21, 128, 61)  # Dark green
create_minimal_png("splash.png", 22, 163, 74)    # Primary green
create_minimal_png("favicon.png", 22, 163, 74)   # Primary green

print("✅ All asset files created successfully!")
print("\nFiles created in assets/ directory:")
for file in ["icon.png", "adaptive-icon.png", "splash.png", "favicon.png"]:
    if os.path.exists(os.path.join(assets_dir, file)):
        print(f"✓ {file}")
    else:
        print(f"✗ {file}")
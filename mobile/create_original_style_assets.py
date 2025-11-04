#!/usr/bin/env python3
"""
Create PNG assets that match the original React JS app design
"""

import struct
import zlib
import os

def create_gradient_png(filename, width, height, start_r, start_g, start_b, end_r, end_g, end_b, text=None):
    """Create a PNG with gradient background matching the original React JS style"""

    # PNG signature
    png_signature = b'\x89PNG\r\n\x1a\n'

    # IHDR chunk
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)  # 8-bit RGB
    ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data) & 0xffffffff
    ihdr_chunk = struct.pack('>I', len(ihdr_data)) + b'IHDR' + ihdr_data + struct.pack('>I', ihdr_crc)

    # Create gradient image data
    image_data = b''

    for y in range(height):
        # Calculate gradient at this row
        ratio = y / height

        # Interpolate between start and end colors
        r = int(start_r + (end_r - start_r) * ratio)
        g = int(start_g + (end_g - start_g) * ratio)
        b = int(start_b + (end_b - start_b) * ratio)

        # Row data: filter byte (0) + RGB for each pixel
        row_data = b'\x00' + bytes([r, g, b] * width)
        image_data += row_data

    # Add text if provided (simple centered text)
    if text:
        # For now, we'll just create the gradient without text overlay
        # Text overlay would require more complex PNG generation
        pass

    # Compress the image data
    compressed_data = zlib.compress(image_data)
    idat_crc = zlib.crc32(b'IDAT' + compressed_data) & 0xffffffff
    idat_chunk = struct.pack('>I', len(compressed_data)) + b'IDAT' + compressed_data + struct.pack('>I', idat_crc)

    # IEND chunk
    iend_crc = zlib.crc32(b'IEND') & 0xffffffff
    iend_chunk = struct.pack('>I', 0) + b'IEND' + struct.pack('>I', iend_crc)

    # Combine all chunks
    png_data = png_signature + ihdr_chunk + idat_chunk + iend_chunk

    # Write to file
    with open(filename, 'wb') as f:
        f.write(png_data)

    print(f"Created {filename} - Gradient from RGB({start_r},{start_g},{start_b}) to RGB({end_r},{end_g},{end_b})")

# Create assets directory
os.makedirs('assets', exist_ok=True)

print("Creating assets matching original React JS design...")

# Colors from original React JS app:
# - green-400: #4ade80 (74, 222, 128)
# - emerald-500: #10b981 (16, 185, 129)
# - green-600: #16a34a (22, 163, 74)

# Icon: Green gradient (similar to login screen background)
create_gradient_png('assets/icon.png', 512, 512,
    74, 222, 128,   # green-400 start
    22, 163, 74)    # green-600 end

# Adaptive icon: Solid emerald-500
create_gradient_png('assets/adaptive-icon.png', 512, 512,
    16, 185, 129,   # emerald-500 start
    16, 185, 129)   # emerald-500 end (solid)

# Splash: Green gradient matching login screen
create_gradient_png('assets/splash.png', 512, 512,
    74, 222, 128,   # green-400 start
    22, 163, 74)    # green-600 end

# Favicon: Solid green-600
create_gradient_png('assets/favicon.png', 512, 512,
    22, 163, 74,    # green-600 start
    22, 163, 74)    # green-600 end (solid)

print("\n✅ Created PNG assets matching original React JS design!")
print("Files use the same green gradient colors as the original web app.")
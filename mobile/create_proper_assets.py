#!/usr/bin/env python3
"""
Create proper 512x512 PNG files with solid colors for Expo
"""

import struct
import zlib
import os

def create_png(filename, width, height, r, g, b):
    """Create a proper PNG file with solid color"""

    # PNG signature
    png_signature = b'\x89PNG\r\n\x1a\n'

    # IHDR chunk
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)  # 8-bit RGB
    ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data) & 0xffffffff
    ihdr_chunk = struct.pack('>I', len(ihdr_data)) + b'IHDR' + ihdr_data + struct.pack('>I', ihdr_crc)

    # IDAT chunk with solid color data
    # Each row: filter byte (0) + RGB data for each pixel
    row_data = b'\x00' + bytes([r, g, b] * width)
    image_data = row_data * height

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

    print(f"Created {filename} ({width}x{width}) - RGB({r},{g},{b})")

# Create assets directory
os.makedirs('assets', exist_ok=True)

# Create the required PNG files
print("Creating proper 512x512 PNG files...")

# Arbor brand colors
create_png('assets/icon.png', 512, 512, 22, 163, 74)          # Primary green #16a34a
create_png('assets/adaptive-icon.png', 512, 512, 21, 128, 61) # Dark green #15803d
create_png('assets/splash.png', 512, 512, 22, 163, 74)        # Primary green #16a34a
create_png('assets/favicon.png', 512, 512, 22, 163, 74)       # Primary green #16a34a

print("\n✅ All PNG files created successfully!")
print("Files ready for Expo app:")
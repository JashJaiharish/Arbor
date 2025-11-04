#!/usr/bin/env python3
"""
Create solid color assets for Expo app
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Create assets directory
assets_dir = "assets"
os.makedirs(assets_dir, exist_ok=True)

# Define colors
PRIMARY_GREEN = (22, 163, 74)  # #16a34a
PRIMARY_DARK = (21, 128, 61)   # #15803d
WHITE = (255, 255, 255)

def create_solid_color_image(filename, size, color, text=None, text_color=WHITE):
    """Create a solid color image with optional text"""
    img = Image.new('RGB', size, color)
    draw = ImageDraw.Draw(img)

    if text:
        try:
            # Try to use a system font
            font_size = min(size[0] // 8, size[1] // 8, 72)
            font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", font_size)
        except:
            try:
                # Fallback to default font
                font = ImageFont.load_default()
            except:
                font = None

        if font:
            # Calculate text position
            bbox = draw.textbbox((0, 0), text, font=font)
            text_width = bbox[2] - bbox[0]
            text_height = bbox[3] - bbox[1]
            x = (size[0] - text_width) // 2
            y = (size[1] - text_height) // 2
            draw.text((x, y), text, fill=text_color, font=font)
        else:
            # Simple text without font
            x = size[0] // 2 - len(text) * 3
            y = size[1] // 2 - 10
            draw.text((x, y), text, fill=text_color)

    img.save(os.path.join(assets_dir, filename))
    print(f"Created {filename}")

# Create required assets
print("Creating Expo app assets...")

# Icon - 512x512 solid green with leaf emoji text
create_solid_color_image("icon.png", (512, 512), PRIMARY_GREEN, "🌿", WHITE)

# Adaptive icon - 512x512 solid dark green
create_solid_color_image("adaptive-icon.png", (512, 512), PRIMARY_DARK)

# Splash screen - 512x512 solid green with app name
create_solid_color_image("splash.png", (512, 512), PRIMARY_GREEN, "Arbor", WHITE)

# Favicon - 512x512 solid green with "A"
create_solid_color_image("favicon.png", (512, 512), PRIMARY_GREEN, "A", WHITE)

print("✅ All assets created successfully!")
print("\nFiles created:")
print("- icon.png (512×512)")
print("- adaptive-icon.png (512×512)")
print("- splash.png (512×512)")
print("- favicon.png (512×512)")
print(f"\nAll saved in: {os.path.abspath(assets_dir)}")
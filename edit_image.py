from PIL import Image, ImageDraw

def remove_text_area(image_path, output_path):
    # Open the image
    img = Image.open(image_path)
    
    # Create a drawing object
    draw = ImageDraw.Draw(img)
    
    # Fill the top area with white
    # Coordinates are approximate, adjust if needed
    draw.rectangle([(0, 0), (img.width, 60)], fill='white')
    
    # Save the modified image
    img.save(output_path, quality=95)
    
    # Close the image
    img.close()

# Remove text from domain-names_cropped.png
remove_text_area(
    'src/assets/domain-names_cropped.png',
    'src/assets/domain-names_cropped.png'
)

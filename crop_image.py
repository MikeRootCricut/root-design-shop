from PIL import Image

def crop_to_aspect_ratio(reference_image_path, target_image_path, output_path):
    # Open the reference image to get its aspect ratio
    ref_img = Image.open(reference_image_path)
    target_img = Image.open(target_image_path)
    
    # Calculate aspect ratio of reference image
    ref_aspect = ref_img.width / ref_img.height
    
    # Calculate new height for target image based on reference aspect ratio
    new_height = int(target_img.width / ref_aspect)
    
    # Calculate how much to crop from top and bottom
    height_diff = target_img.height - new_height
    top_crop = height_diff // 2
    
    # Crop the image
    cropped = target_img.crop((0, top_crop, target_img.width, top_crop + new_height))
    
    # Save the cropped image
    cropped.save(output_path, quality=95)
    
    # Close the images
    ref_img.close()
    target_img.close()

# Crop domain-names.png to match nerd.jpg's aspect ratio
crop_to_aspect_ratio(
    'src/assets/nerd.jpg',
    'src/assets/domain-names.png',
    'src/assets/domain-names_cropped.png'
)

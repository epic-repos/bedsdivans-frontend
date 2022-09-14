const handleImageURL = (image: File | null) => {
    if (!image) return "";
    return URL.createObjectURL(image);
};

export default handleImageURL;

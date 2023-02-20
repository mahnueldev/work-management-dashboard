const Avatar = ({ images, size, max, extrabg }) => {
  const maxImages = max;
  const remainingImages = images.length - maxImages;
  return (
    <div className='relative'>
      {images.slice(0, maxImages).map((image, index) => (
        <div
          key={index}
          className={`w-${size} h-${size} rounded-full border-2 border-white shadow absolute z-${
            maxImages - index
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            left: `${index * 25}px`,
          }}
        />
      ))}
      {remainingImages > 0 && (
        <div
          className={`w-${size} h-${size} rounded-full border-2 border-white shadow absolute z-0`}
          style={{
            left: `${(maxImages - 1) * 35}px`,
            backgroundColor: `${extrabg}`,
          }}
        >
          <span className=' flex items-center justify-center h-full'>
            +{remainingImages}
          </span>
        </div>
      )}
    </div>
  );
};

export default Avatar;

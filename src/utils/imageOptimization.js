// Image Optimization Utility

/**
 * Generate optimized image URLs for different screen sizes
 */
export const getOptimizedImageUrl = (url, width, quality = 80) => {
  // For Unsplash images
  if (url.includes('unsplash.com')) {
    return `${url}&w=${width}&q=${quality}&fm=webp&fit=crop`;
  }
  
  // For other CDNs, add your logic here
  return url;
};

/**
 * Generate srcset for responsive images
 */
export const generateSrcSet = (url, sizes = [640, 750, 828, 1080, 1200]) => {
  return sizes
    .map(size => `${getOptimizedImageUrl(url, size)} ${size}w`)
    .join(', ');
};

/**
 * Get appropriate image dimensions to prevent layout shift
 */
export const getImageDimensions = (aspectRatio = '16:9', width) => {
  const ratios = {
    '16:9': 9 / 16,
    '4:3': 3 / 4,
    '1:1': 1,
    '3:2': 2 / 3,
  };
  
  const ratio = ratios[aspectRatio] || ratios['16:9'];
  return {
    width,
    height: Math.round(width * ratio),
  };
};

/**
 * Lazy load image with Intersection Observer
 */
export const lazyLoadImage = (imageElement) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.dataset.src;
        const srcset = img.dataset.srcset;
        
        if (src) img.src = src;
        if (srcset) img.srcset = srcset;
        
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px', // Start loading 50px before image enters viewport
  });
  
  observer.observe(imageElement);
  return observer;
};

/**
 * Optimized Image Component Props Helper
 */
export const getOptimizedImageProps = (src, alt, options = {}) => {
  const {
    width = 1200,
    aspectRatio = '16:9',
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    quality = 80,
    lazy = true,
  } = options;
  
  const dimensions = getImageDimensions(aspectRatio, width);
  const optimizedSrc = getOptimizedImageUrl(src, width, quality);
  const srcset = generateSrcSet(src, [640, 750, 828, 1080, 1200, 1920]);
  
  return {
    src: optimizedSrc,
    srcSet: srcset,
    sizes,
    alt,
    width: dimensions.width,
    height: dimensions.height,
    loading: lazy ? 'lazy' : 'eager',
    decoding: 'async',
  };
};

export default {
  getOptimizedImageUrl,
  generateSrcSet,
  getImageDimensions,
  lazyLoadImage,
  getOptimizedImageProps,
};

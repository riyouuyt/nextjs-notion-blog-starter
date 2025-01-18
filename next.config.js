module.exports = {
  images: {
    unoptimized: true, // Menonaktifkan optimasi gambar oleh Next.js
    domains: [
      's3.us-west-2.amazonaws.com', // Images coming from Notion
      'via.placeholder.com', // for articles that do not have a cover image
      'images.unsplash.com', // For blog articles that use an external cover image
      'pbs.twimg.com', // Twitter Profile Picture
      'dwgyu36up6iuz.cloudfront.net',
      'cdn.hashnode.com',
      'res.craft.do',
      'res.cloudinary.com',
      'nextjs-notion-blog-starter.vercel.app',
      'prod-files-secure.s3.us-west-2.amazonaws.com'
    ]
  },
  webpack(config, { isServer }) {
    // Nonaktifkan source map untuk client-side
    if (!isServer) {
      config.devtool = false;
    }
    return config;
  }
};

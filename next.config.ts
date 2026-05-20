/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  turbopack: {
    rules: {
      // ✅ Configuración para archivos de video
      '*.mp4': {
        type: 'asset', // Los trata como recursos estáticos
      },
      '*.webm': {
        type: 'asset',
      },
      '*.mov': {
        type: 'asset',
      },
    },
  },
}

module.exports = nextConfig
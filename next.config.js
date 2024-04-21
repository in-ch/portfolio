/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
    openAnalyzer: false,
});

const nextConfig = {
    images: {
        domains: ['velog.velcdn.com','velog.io']
    }
}

// module.exports = withBundleAnalyzer(nextConfig)
module.exports = nextConfig

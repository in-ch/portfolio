/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
    openAnalyzer: false,
});

const nextConfig = {
    output: "export",
    images: {
        domains: ['velog.velcdn.com','velog.io', 'in-ch.github.io']
    }
}

// module.exports = withBundleAnalyzer(nextConfig)
module.exports = nextConfig

```javascript
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
experimental: {
    // Enable necessary experimental features here
  },
}

module.exports = nextConfig;

// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
    </div>
  );
}
```
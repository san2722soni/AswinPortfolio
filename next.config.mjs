const emailjsEnv = {
    NEXT_PUBLIC_EMAILJS_USER_SERVICE_ID:
        process.env.NEXT_PUBLIC_EMAILJS_USER_SERVICE_ID ??
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ??
        process.env.EMAILJS_USER_SERVICE_ID ??
        process.env.EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID:
        process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID ??
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ??
        process.env.EMAILJS_USER_TEMPLATE_ID ??
        process.env.EMAILJS_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_USER_ID:
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID ??
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ??
        process.env.EMAILJS_USER_ID ??
        process.env.EMAILJS_PUBLIC_KEY,
};

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: Object.fromEntries(Object.entries(emailjsEnv).filter(([, value]) => Boolean(value))),
    compiler:{
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.youtube.com",
            },
        ],
    },
};

export default nextConfig;

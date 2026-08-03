// Set once the About section background video is uploaded to S3/CloudFront, e.g.
// ABOUT_VIDEO_CDN_URL=https://d123abc.cloudfront.net/about-bg.mp4
export function getAboutVideoUrl(): string | undefined {
  return process.env.ABOUT_VIDEO_CDN_URL
}

export const ABOUT_VIDEO_POSTER = '/images/about-video-poster.jpg'

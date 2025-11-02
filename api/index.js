export default async function handler(req, res) {
  res.status(200).json({
    status: 'success',
    message: '🚀 Server running on Vercel!',
    time: new Date().toISOString(),
  });
}

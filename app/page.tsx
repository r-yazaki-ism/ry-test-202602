// Cloudflare Pagesで動かすための必須設定
export const runtime = 'edge'; 

export default function Home() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>microCMS + Next.js Test Site</h1>
      <p>ここがトップページです。正常に表示されています！</p>
    </main>
  );
}
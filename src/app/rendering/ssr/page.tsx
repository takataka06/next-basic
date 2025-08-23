import Image from "next/image"
export const dynamic = 'force-dynamic'; //このページを常にサーバーでレンダリングするSSRを強制

export default async function page() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {cache: 'no-store'}); //no-storeでキャッシュを無効化

  const resJson = await res.json();
  const image = resJson.message;

  const timestamp = new Date().toLocaleString();
  return (
    <div>
      SSR 毎回リロード: {timestamp}
      <Image src={image} width={400} alt="dog" />                         
    </div>
  )
}

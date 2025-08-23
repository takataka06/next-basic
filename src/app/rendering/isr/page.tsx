import next from "next";
import Image from "next/image"
export const revalidate = 10; // 10秒ごとに再生成する

export default async function SSGpage() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random",{
    next:{revalidate: 10}
  })

  const resJson = await res.json();
  const image = resJson.message;

  const timestamp = new Date().toLocaleString();
  return (
    <div>
      IISR 10秒ごとにリロード： {timestamp}
      <Image src={image} width={400} alt="dog" />                         
    </div>
  )
}

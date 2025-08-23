  import Image from "next/image"
  export default async function SSGpage() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random")

    const resJson = await res.json();
    const image = resJson.message;

    const timestamp = new Date().toLocaleString();
    return (
      <div>
        SSG ビルド時に生成され固定: {timestamp}
        <Image src={image} width={400} alt="dog" />                         
      </div>
    )
  }

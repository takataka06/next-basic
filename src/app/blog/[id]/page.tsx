type Params = {
  params: Promise<{
    id: string;
  }>;
}
export async function generateMetadata({params} : Params){
  const { id } = await params;
  return {
    title: `ブログ記事ID: ${id}`

  }
}


export default async function page({params} : Params) {
  const { id } = await params;
  return (
    <div>
      ぶろぐID{id}
    </div>
  )
}

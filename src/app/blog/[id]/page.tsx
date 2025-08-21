type Params = {
  params: Promise<{
    id: string;
  }>;
}


export default async function page({params} : Params) {
  const { id } = await params;
  return (
    <div>
      ぶろぐID{id}
    </div>
  )
}

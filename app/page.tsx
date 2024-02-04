
async function getPokemon() {
  await new Promise((resolve) => setTimeout(resolve, 2000));


  // ビルド時とリクエスト時にfetchが行われ、返ってきた値をサーバー上のデータキャッシュで自動的にキャッシュする
  // const res = await fetch('https://pokeapi.co/api/v2/pokemon/1', { cache: 'force-cache' })

  // リクエストに対してキャッシュを行わない
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/1', { cache: 'no-store' })


  if (!res.ok) {
    throw new Error('Failed to fetch pokemon')
  }

  return res.json()


}

export default async function Home() {
  const pokemon = await getPokemon()

  return (
    <>
      <div>homeですよ</div>
      <div>{pokemon.name}</div>
    </>
  )
}

import { PostProps } from '../page';
import { PostInfo } from './_components/post';
import { Suspense } from 'react';

export default async function DetaisPost({
  params
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params;

  await new Promise(resolve => setTimeout(resolve, 4000)) // Simulando uma requisição lenta

  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: PostProps = await response.json();

  return (
    <div>
      <h1 className='text-4xl font-bold text-center'>
        Detalhes do Post: {id}
      </h1>

      // Suspense é um componente do React que permite que você suspenda a renderização enquanto aguarda que algo seja carregado.
      <Suspense fallback={<h1>Carregando...</h1>}> // fallback é o que será exibido enquanto o conteúdo estiver sendo carregado
        <PostInfo id={id}/> 
      </Suspense>

    </div>
  )
}
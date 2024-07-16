import { ImageResponse } from '@vercel/og';
import Image from 'next/image';
 
export const config = {
  runtime: 'edge',
};
 
export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image src={'/pics.png'} alt='pics' height={250} width={250} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
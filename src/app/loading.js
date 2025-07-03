import { Roboto } from 'next/font/google';
import Image from 'next/image';

const roboto = Roboto({
  subsets: ['latin'],
    weight: ['400', '700'],
});

export default function Loading() {
  return (
    <div>
    <p className={roboto.className}>Loading...</p>
    <Image
      src="/gurren_lagann_spin.gif"
      alt="Loading image"
      width={1080}
      height={605}>
      </Image>
    </div>
  );
}
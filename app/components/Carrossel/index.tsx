'use client';
// import { Carousel } from "flowbite-react";
import Image from 'next/image';

export default function Carrossel() {
	return (
		<div className="overflow-hidden absolute py-12 w-screen">
			<h3 className="text-4xl font-bold self-center text-center">Veja os meus resultados:</h3>

			<div className="relative snap-proximity overflow-x-auto w-full flex gap-5 p-12">
				<Image
					src="/foto1.JPG"
					className="rounded-xl snap-center"
					width={738 / 2}
					height={1600 / 2}
					alt="Lucelia desiner"
				/>
				<Image
					src="/foto2.JPG"
					className="rounded-xl snap-center"
					width={738 / 2}
					height={1600 / 2}
					alt="Lucelia desiner"
				/>
				<Image
					src="/foto3.JPG"
					className="rounded-xl snap-center"
					width={738 / 2}
					height={1600 / 2}
					alt="Lucelia desiner"
				/>
				<Image
					src="/foto4.JPG"
					className="rounded-xl snap-center"
					width={738 / 2}
					height={1600 / 2}
					alt="Lucelia desiner"
				/>
				<Image
					src="/foto5.JPG"
					className="rounded-xl snap-center"
					width={738 / 2}
					height={1600 / 2}
					alt="Lucelia desiner"
				/>
				<Image
					src="/foto6.JPG"
					className="rounded-xl snap-center"
					width={738 / 2}
					height={1600 / 2}
					alt="Lucelia desiner"
				/>
				<Image
					src="/foto7.JPG"
					className="rounded-xl snap-center"
					width={738 / 2}
					height={1600 / 2}
					alt="Lucelia desiner"
				/>
				<Image
					src="/foto8.JPG"
					className="rounded-xl snap-center"
					width={738 / 2}
					height={1600 / 2}
					alt="Lucelia desiner"
				/>
				<Image
					src="/foto9.JPG"
					className="rounded-xl snap-center"
					width={738 / 2}
					height={1600 / 2}
					alt="Lucelia desiner"
				/>
				<Image
					src="/foto10.JPG"
					className="rounded-xl snap-center"
					width={738 / 2}
					height={1600 / 2}
					alt="Lucelia desiner"
				/>
        <Image
					src="/foto11.jpeg"
					className="rounded-xl snap-center"
					width={738 / 2}
					height={1600 / 2}
					alt="Lucelia desiner"
				/>
        <Image
					src="/foto12.jpeg"
					className="rounded-xl snap-center"
					width={738 / 2}
					height={1600 / 2}
					alt="Lucelia desiner"
				/>
        <Image
					src="/foto13.jpeg"
					className="rounded-xl snap-center"
					width={738 / 2}
					height={1600 / 2}
					alt="Lucelia desiner"
				/>
        <Image
					src="/foto14.jpeg"
					className="rounded-xl snap-center"
					width={738 / 2}
					height={1600 / 2}
					alt="Lucelia desiner"
				/>
			</div>
		</div>
	);
}

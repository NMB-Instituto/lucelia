'use client';
import { CheckCircle } from '@phosphor-icons/react';
import { Container } from '@radix-ui/themes';

export function Direction() {
	return (
		<section className="flex items-center justify-center bg-pink-800 text-white md:items-center md:justify-center ">
			<Container>
				<div className="flex py-12 items-center justify-center md:items-center md:justify-center">
					<ul className="flex flex-col gap-5 list-none w-screen p-5 md:p-0">
						<h3 className="text-3xl font-bold">Para quem é esse Ebook?</h3>
						<li className="flex gap-2">
							<CheckCircle size={24} color="white" weight="fill" className="w-11" />
							<p>
								Donas de loja online ou física que precisam colocar dinheiro no bolso através de uma
								solução fácil e rápida.
							</p>
						</li>
						<li className="flex gap-2">
							<CheckCircle size={24} color="white" weight="fill" className="w-11" />
							<p>
								Mulheres que têm medo ou vergonha de fazer uma LiveShop e não ter ninguém
								assistindo.
							</p>
						</li>
						<li className="flex gap-2">
							<CheckCircle size={24} color="white" weight="fill" className="w-11" />
							<p>
              Donas de loja que não vendem em LiveShop por não terem estratégia ou não saberem como fazer uma oferta irresistível.
							</p>
						</li>
            <li className="flex gap-2">
							<CheckCircle size={24} color="white" weight="fill" className="w-11" />
							<p>
                Para quem quer vender muito mais com muito menos trabalho.
              </p>
						</li>
					</ul>
				</div>
			</Container>
		</section>
	);
}

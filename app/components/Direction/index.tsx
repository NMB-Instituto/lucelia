'use client';
import { CheckCircle } from '@phosphor-icons/react';
import { Container } from '@radix-ui/themes';

export function Direction() {
	return (
		<section className="flex items-center justify-center bg-pink-800 text-white md:items-center md:justify-center ">
			<Container>
				<div className="flex py-12  items-center justify-center md:items-center md:justify-center">
					<div className="flex flex-col gap-5">
						<h3 className="text-3xl font-bold">Para quem é esse Ebook?</h3>
						<div className="flex gap-2">
							<CheckCircle size={24} color="white" weight="fill" />
							<p>
								Donas de loja online ou física que precisam colocar dinheiro no bolso através de uma
								solução fácil e rápida.
							</p>
						</div>
						<div className="flex gap-2">
							<CheckCircle size={24} color="white" weight="fill" />
							<p>
								Mulheres que têm medo ou vergonha de fazer uma LiveShop e não ter ninguém
								assistindo.
							</p>
						</div>
						<div className="flex gap-2">
							<CheckCircle size={24} color="white" weight="fill" />
							<p>
              Donas de loja que não vendem em LiveShop por não terem estratégia ou não saberem como fazer uma oferta irresistível.
							</p>
						</div>
            <div className="flex gap-2">
							<CheckCircle size={24} color="white" weight="fill" />
							<p>
                Para quem quer vender muito mais com muito menos trabalho.
              </p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-gray-900 bg-home-img bg-cover bg-center  text-white mx-auto">
			<main className="w-full h-dvh flex items-center justify-center">
				<div className="bg-black/90 flex flex-col items-center justify-center text-center gap-6 p-12 rounded-xl w-4/5 sm:max-w-96 sm:text-2xl">
					<h1 className="text-4xl font-bold">
						Dan&apos;s Computer
						<br />
						Repair Shop
					</h1>
					<address>
						555, Gateway Lane,
						<br />
						San Francisco, CA 94105
					</address>
					<p>Open Daily: 9am to 5pm</p>
					<Link href="tel:+1234567890" className="hover:underline">
						+123-567-7890
					</Link>
				</div>
			</main>
		</div>
	);
}

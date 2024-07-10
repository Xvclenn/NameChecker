"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Home = () => {
	const [name, setName] = useState("");
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (name) {
			router.push(`/greet/${name}`);
		}
	};

	return (
		<div className="sm:m-10 m-5 rounded-2xl flex items-center justify-center min-h-[90vh] bg-center bg-cover bg-gray-400 bg-[url('/backGroundPurple.jpg')] bg-blend-multiply">
			<div className="glass sm:w-full w-[80%] max-w-md p-8 bg-white rounded shadow-2xl">
				<h1 className="mb-4 text-2xl font-bold text-center text-white">
					Энэ дээр нэрээ бич.
				</h1>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col space-y-4"
				>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Нэрээ хэлээдэх..."
						className="p-2 border border-gray-300 rounded focus:outline-purple-400"
					/>
					<button
						type="submit"
						className="glass p-2 text-white rounded hover:bg-purple-400"
					>
						Болсон
					</button>
				</form>
			</div>
		</div>
	);
};

export default Home;

"use client";

import "@/app/globals.css";
import Loading from "@/components/Loading";
import FireworksComponent from "@/components/FireworksComponent";
import { capitalizeFirstLetter } from "@/utils/capitalize";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

const randomTexts = [
	"чиний гоо үзэсгэлэн миний дэлхийг гэрэлтүүлдэг ✨🌍.",
	"чиний инээмсэглэл надад өдөр бүр урам зориг өгдөг 😇.",
	"чиний эр зориг хязгааргүй 💪🏾.",
	"чиний хүч чадлыг юугаар ч зүйрлэшгүй 😌🙏🏾.",
	"чамтай хамт байх хугацаа яг л пуужин шиг хурдан 🚀.",
	"чи яг л ховор эрдэнийн чулуу шиг 💎.",
	"заримдаа чи яг л тэсрэх бөмбөг шиг 💣.",
	"чи бол миний 🧚🏻‍♀️.",
	"чиний өөрийнхөөрөө байгаа чинь хайралмаар 🫠🫂.",
	"чиний нүднээс итгэл мэдэрдэг 🫀.",
	"чи бол миний 🧜🏽‍♀️.",
];

const Greet = () => {
	const router = useRouter();
	const { name } = router.query;
	const [randomText, setRandomText] = useState("");
	const [loading, setLoading] = useState<boolean>(true);

	const handleClick = () => {
		router.push("/");
	};

	useEffect(() => {
		if (name) {
			const randomIndex = Math.floor(Math.random() * 8);
			setRandomText(randomTexts[randomIndex]);
			console.log(randomIndex);
		}
	}, [name]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false); // Set loading to false after 3 seconds
		}, 2000); // 3000 milliseconds = 3 seconds

		return () => clearTimeout(timer); // Clean up timeout on component unmount
	}, []);

	if (loading) {
		return <Loading />; // Display loading indicator while loading is true
	}

	if (!name) return <div>Loading...</div>;

	const capitalized_name = capitalizeFirstLetter(name as string);

	return (
		// <div className="flex items-center justify-center min-h-screen bg-gray-100">
		// 	<div className="w-full max-w-md p-8 bg-white rounded shadow-md text-center">
		// 		<h1 className="mb-4 text-2xl font-bold">
		// 			{capitalized_name} {randomText}
		// 		</h1>
		// 	</div>
		// </div>

		<div className="relative sm:m-10 m-5 rounded-2xl flex items-center justify-center min-h-[90vh] bg-center bg-cover bg-gray-400 bg-[url('/backGroundPurple.jpg')] bg-blend-multiply">
			<FireworksComponent />
			<div className="glass sm:w-full w-[80%] max-w-md p-8 bg-white rounded shadow-2xl">
				<h1 className="text-2xl font-bold text-center text-white">
					{capitalized_name} {randomText}
				</h1>
			</div>
			<button
				onClick={handleClick}
				className="absolute right-10 bottom-10 glass hover:bg-purple-400 w-12 h-12 flex justify-center items-center rounded-full"
			>
				<Image src="/eco.png" width={20} height={20} alt="back" />
			</button>
		</div>
	);
};

export default Greet;

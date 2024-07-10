// src/components/Loading.tsx

const Loading = () => {
	return (
		<div className=" sm:m-10 m-5 rounded-2xl flex items-center justify-center min-h-[90vh] bg-center bg-cover bg-gray-400 bg-[url('/backGroundPurple.jpg')] bg-blend-multiply">
			<div className="glass px-5 py-3 text-[25px] font-medium leading-none text-center text-white rounded-full animate-pulse dark:text-blue-200">
				Боловсорч байна 😌 ...
			</div>
		</div>
	);
};

export default Loading;

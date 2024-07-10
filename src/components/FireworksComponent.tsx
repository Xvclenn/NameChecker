import React, { useEffect } from "react";
import Fireworks from "fireworks-js";

const FireworksComponent: React.FC = () => {
	useEffect(() => {
		const container = document.querySelector(".container");
		if (!container) return;

		const fireworks = new Fireworks(container, {
			/* options */
		});
		fireworks.start();

		return () => {
			fireworks.stop(); // Cleanup when component unmounts
		};
	}, []);

	return (
		<div
			className="container"
			style={{
				position: "absolute",
				width: "100vw",
				height: "100vh",
			}}
		/>
	);
};

export default FireworksComponent;

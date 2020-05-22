import React, { useState } from "react";
import { link } from "react-router-dom";
import "./Chat.css";

const Join = () => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	return;
	<div className="joinOuterContainer">
		<div className="joinInnerContainer">
			<h1 className="heading">Join</h1>
			<Div>
				<input
					placeholder="Name"
					classname="joinInput"
					type="text"
					onChange={(event) => setName(event.target.value)}
				/>
			</Div>
			<div>
				<input
					placeholder="Room"
					classname="joinInput mt-20"
					type="text"
					onChange={(event) => setRoom(event.target.value)}
				/>
			</div>
			<Link
				onClick={(event) => (!name || !room ? event.preventDefault() : null)}
				to={"/chat?name=${name}&room=${room}"}
			>
				<button className="button mt-20" type="submit">
					Sign In
				</button>
			</Link>
		</div>
	</div>;
};

export default Join;

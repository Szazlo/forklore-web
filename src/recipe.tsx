import "./main.css";

function Recipe() {
	return (
		<>
			<main className={"flex-grow mx-40"}>
				<div className="flex flex-col justify-start w-full">
					<div className="flex h-auto w-full items-start justify-center">
						<img
							src={
								"https://nomadparadise.com/wp-content/uploads/2023/04/501_00fi-735x490.jpg"
							}
							alt="Recipe"
							className={"w-auto max-h-96 rounded-2xl mr-4"}
						/>
						<div className="flex w-full h-96 border-2 border-secondary rounded-2xl">
							<div className="flex flex-col justify-between w-full p-4">
								<div className="flex items-start justify-between">
									<div>
										<h1 className="text-4xl">Recipe Name</h1>
										<p>Description</p>
									</div>
									<div className={"flex flex-col"}>
										<div className="flex">
											<img
												src={
													"https://i1.sndcdn.com/artworks-000351391263-hmj4bg-t500x500.jpg"
												}
												alt="Profile"
												className="h-11 w-11 mx-2 rounded-full"
											/>
											<div className="flex flex-col justify-end">
												<p className={"block"}>Nibba Shrigga</p>
												<p className={"flex justify-end text-primary text-sm"}>
													@shrigger
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="flex justify-between items-end">
									<div className="flex flex-col items-start">
										<p>
											<b>Prep Time: </b>40 min
										</p>
										<p>
											<b>Cook Time: </b>25 min
										</p>
										<p>
											<b>Difficulty: </b>Medium
										</p>
									</div>
									<div className="flex flex-col items-end justify-end">
										<div className="flex items-end justify-end">
											<button className={"btn"}>Save</button>
											<button className={"btn"}>Share</button>
										</div>
										<p className={"text-yellow-400 text-3xl"}>* * * *</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full justify-start mt-4 p-4 border-2 border-primary rounded-2xl">
						<h2 className="text-2xl mb-2">Ingredients</h2>
						<ul className={"list-disc list-inside"}>
							<li>1g flour</li>
							<li>70g sugar</li>
							<li>20ml milk</li>
							<li>200ml water</li>
							<li>70g minced pork</li>
							<li>100g beef lard/tallow</li>
						</ul>
					</div>
					<div className="flex flex-col w-full justify-start mt-4 p-4 border-2 border-primary rounded-2xl">
						<h2 className="text-2xl mb-2">Instructions</h2>
						<ol className={"list-decimal list-inside"}>
							<li>Preheat the oven to 180 degrees</li>
							<li>Mix the flour, sugar, and milk in a bowl</li>
							<li>Add water and mix until sticky</li>
							<li>Pour the mixture into a baking tray</li>
							<li>Slice into 2x15cm sticks</li>
							<li>Bake for 5 minutes</li>
						</ol>
					</div>
				</div>
			</main>
		</>
	);
}

export default Recipe;

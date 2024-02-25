import React from "react";

export default function About() {
	return (
		<div className="py-16 bg-white">
			<div className=" m-auto px-6 text-gray-600 md:px-12 xl:px-6">
				<div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
					<div className="md:5/12 lg:w-5/12">
						<img
							src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
							alt="image"
						/>
					</div>
					<div className="md:7/12 lg:w-6/12">
						<h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
							React development
						</h2>
						<p className="mt-6 font-semibold text-lg text-gray-600">
							React.js is a declarative, efficient, and flexible JavaScript
							library for building user interfaces, particularly single-page
							applications where UIs need to be dynamic and responsive.
							Developed and maintained by Facebook, React simplifies the process
							of creating interactive and reusable UI components.
						</p>
					</div>
				</div>
				<div className="">
					<p className="mt-4 text-gray-600">
						Here are key concepts and features of React:
					</p>

					<h3 className="text-gray-600 font-semibold text-xl">
						1. Declarative Syntax:
					</h3>
					<p>
						React uses a declarative syntax, making it easier to understand and
						reason about the code. Developers can describe how the UI should
						look for a given state, and React takes care of updating the UI
						accordingly.
					</p>

					<h3 className="text-gray-600 font-semibold text-xl">
						2.Component-Based Architecture:
					</h3>
					<p>
						React creates reusable and modular components. Each component
						manages its state, making it easier to maintain and scale
						applications.
					</p>

					<h3 className="text-gray-600 font-semibold text-xl">
						3.Virtual DOM for Performance:
					</h3>
					<p>
						React updates only update the changes needed than reloading whole
						dom.
					</p>

					<h3 className="text-gray-600 font-semibold text-xl">
						4.Unidirectional Data Flow:
					</h3>
					<p>
						React enforces a unidirectional data flow, which means that data
						flows in one direction, from parent to child components. This
						simplifies data management and reduces the likelihood of bugs
						related to data inconsistency.
					</p>

					<h3 className="text-gray-600 font-semibold text-xl">
						5.JSX (JavaScript XML):
					</h3>
					<p>
						React uses JSX, a syntax extension that allows developers to write
						HTML-like code directly in JavaScript. JSX makes the code more
						readable and helps catch errors during compilation.
					</p>

					<h3 className="text-gray-600 font-semibold text-xl">
						6.State Management:
					</h3>
					<p>
						React provides a straightforward way to manage the state of
						components, and when combined with state management libraries like
						Redux or Context API, it becomes powerful for managing complex
						application states.
					</p>

					<h3 className="text-gray-600 font-semibold text-xl">
						7.Large Ecosystem and Community Support:
					</h3>

					<h3 className="text-gray-600 font-semibold text-xl">
						8.Flexibility and Compatibility:
					</h3>
				</div>
			</div>
		</div>
	);
}

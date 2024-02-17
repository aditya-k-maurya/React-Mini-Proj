import weather from "../img/weatherApp.png";
import theme from "../img/theme.png";
import currency from "../img/converter.png";
import todo from "../img/todo.png";
import todoredux from "../img/todoredux.png";
import calculator from "../img/calculator.png";
import password from "../img/password.png";
import counter from "../img/counter.png";

const mini = [
	{
		key: 8,
		title: "Weather App",
		description:
			"Check the current weather conditions in your locality in one search",
		image: weather,
		path: "/weather",
	},
	{
		key: 7,
		title: "Theme changer",
		description: "Change theme from light to dark on one click",
		image: theme,
		path: "/theme",
	},
	{
		key: 6,
		title: "Currency converter",
		description: "Convert currency and calculate the amount in different curriencies",
		image: currency,
		path: "/converter",
	},
	{
		key: 5,
		title: "Todo App",
		description:
			"Manage your tasks and stay organized with the todo app. Implementation of context API and local storage",
		image: todo,
		path: "/todo",
	},
	{
		key: 4,
		title: "Todo App using redux",
		description: "Todo app but with implementation of redux",
		image: todoredux,
		path: "/reduxtodo",
	},
	{
		key: 3,
		title: "Calculator",
		description: "Perform basic calculations with ease",
		image: calculator,
		path: "/calculator",
	},
	{
		key: 2,
		title: "Password Generator",
		description: "Generate a strong password based on the requirement. ",
		image: password,
		path: "/passwordgenerator",
	},
	{
		key: 1,
		title: "Counter",
		description: "Increment or Decrement value on one click",
		image: counter,
		path: "/counter",
	},
];

export default mini;

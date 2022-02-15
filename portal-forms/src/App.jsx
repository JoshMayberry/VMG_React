import CssBaseline from '@mui/material/CssBaseline';

import Header from "./components/Header";
import DynamicForm from "./components/DynamicForm";

function App() {
	return (
		<>
			{/* <CssBaseline enableColorScheme /> */}
 			<Header title="Move In" />
 			<DynamicForm />
		</>
	);
}

export default App;

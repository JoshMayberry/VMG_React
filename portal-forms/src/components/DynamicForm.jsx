import PropTypes from "prop-types";

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import DynamicFormItem from "./DynamicFormItem";



const DynamicForm = ({ title, item_count = 3 }) => {
	return (
		<Container component="main" style={{ padding: 8 }}>
			<Paper elevation={3} style={{ padding: 8 }}>
				{ Array.from(Array(item_count).keys()).map(() => <DynamicFormItem />) }
				<Button variant="contained" >
                    Submit
                </Button>
			</Paper>
		</Container>
	)
};

DynamicForm.defaultProps = {
		title: "Unknown Form",
};

DynamicForm.propTypes = {
		title: PropTypes.string,
};

export default DynamicForm;
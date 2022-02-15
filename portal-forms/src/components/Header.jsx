import PropTypes from "prop-types";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = ({ title }) => {
	return (
		<AppBar
			position="absolute"
			color="default"
			elevation={0}
			sx={{
				position: 'relative',
				borderBottom: (t) => `1px solid ${t.palette.divider}`,
			}}
		>
			<Toolbar>
				<Typography variant="h6" color="inherit" noWrap>
					{title}
				</Typography>
			</Toolbar>
		</AppBar>
	)
};

Header.defaultProps = {
		title: "Formsite Viewer",
};

Header.propTypes = {
		title: PropTypes.string,
};

export default Header;
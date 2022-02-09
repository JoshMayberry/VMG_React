import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="mdl-layout__header2" style={{display: "flex", justifyContent: "space-around", alignItems: "center", width: "100%"}}>
		<img src="https://fs8.formsite.com/e1SwO6/images/Floor_Mat.png" alt="Vineyards Management Group" width="318" height="182" />
		<div className="mdl-layout-spacer"></div>
		<span style={{fontSize: "30px", textAlign: "center"}}><strong>{title}</strong></span>
		<div className="mdl-layout-spacer"></div>
	</header>
  )
};

Header.defaultProps = {
    title: "Formsite Viewer",
};

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;
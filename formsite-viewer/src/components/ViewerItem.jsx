// import PropTypes from "prop-types";

const ViewerItem = ({ _key, condition, maintenance, photo, status}) => {
	return (
		<div className="demo-card-wide mdl-card mdl-shadow--2dp" style={{margin: 6, minHeight: "auto"}}>
			<div className="mdl-card__title">
				<h2 className="mdl-card__title-text">{_key}</h2>
			</div>
			{photo && <div className="mdl-card__media" style={{backgroundColor: "transparent"}}>
				<img src={photo} width="220" height="140" border="0" alt="" style={{padding: "20px"}} />
			</div>}
			<div className="mdl-card__supporting-text">
				{condition && <p>Condition: {condition}</p>}
				{maintenance && <p>Maintenance: {maintenance}</p>}
			</div>
		</div>
	);
};

ViewerItem.defaultProps = {
	_key: "unknown",
};

ViewerItem.propTypes = {
};

export default ViewerItem;
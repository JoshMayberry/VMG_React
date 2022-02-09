import PropTypes from "prop-types";

const ViewerItem = ({ _key, condition, maintenance, photo, status}) => {
	return (
		<>
			<span style={{fontSize: "30px"}}><strong>{_key}</strong></span>
			<table style={{borderCollapse: "collapse", width: "100%", height: "36px", border: "1"}}>
				<tbody>
					<tr style={{height: "18px"}}>
						<td style={{width: "33.3333%", bordeStyle: "solid", backgroundColor: "#e3e3e3", textAlign: "center", height: "18px"}}><span style={{fontSize: "16px"}}><strong>Condition</strong></span></td>
						<td style={{width: "33.3333%", bordeStyle: "solid", backgroundColor: "#e3e3e3", textAlign: "center", height: "18px"}}><span style={{fontSize: "16px"}}><strong>Maintenance Required</strong></span></td>
					</tr>
					<tr style={{height: "18px"}}>
						<td style={{width: "33.3333%", height: "18px", textAlign: "center"}}>{condition}</td>
						<td style={{width: "33.3333%", height: "18px", textAlign: "center"}}>{maintenance}</td>
					</tr>
				</tbody>
			</table>
			<table style={{borderCollapse: "collapse", width: "100%", height: "36px", border: "1"}}>
				<tbody>
					<tr style={{height: "18px"}}>
						<td style={{width: "33.3333%", bordeStyle: "solid", backgroundColor: "#e3e3e3", textAlign: "center", height: "18px"}}><span style={{fontSize: "16px"}}><strong>Add Photo if Damaged</strong></span></td>
					</tr>
					<tr style={{height: "18px"}}>
						<td style={{width: "33.3333%", height: "18px", textAlign: "center"}}>{photo}</td>
					</tr>
				</tbody>
			</table>
			<p></p>
		</>
	);
};

ViewerItem.defaultProps = {
	_key: "unknown",
};

ViewerItem.propTypes = {
};

export default ViewerItem;
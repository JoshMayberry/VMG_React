import PropTypes from "prop-types";
import ViewerItem from "./ViewerItem";

const Viewer = () => {
	const data = {
		reference: "15123092",
		status: "Complete",
		username: "none",
		email: "none",
		resident_name: "",
		lat: "",
		long: "",
		ref_url: "",
		balance_due: "",
		prop_name: "",
		lot_number: "",
		prop_code: "",
		site_id: "",
		resident_groupid: "",
		date_inspected: "2022-02-09",
		inspected_by: "JACE K JOHNSON test",
		deck: {
			condition: "Excellent",
			maintenance: "2022-02-09",
			photo: "",
		},
		railing: {
			condition: "Excellent",
			maintenance: "",
			photo: "https://fs8.formsite.com/e1SwO6/files/f-213-83-15123092_pRLuGg2d_f-138-515-14781423_xzPvzLHB_IMG_2205.jpg",
		},
		skirting: {
			condition: "",
			maintenance: "",
			photo: "",
		},
		steps: {
			condition: "Excellent",
			maintenance: "2022-02-09",
			photo: "https://fs8.formsite.com/e1SwO6/files/f-213-91-15123092_TbQ4SnL8_pngfind.com-toilet-png-506943.png",
		},
		roof: {
			condition: "",
			maintenance: "",
			photo: "",
		},
		exterior_doors: {
			condition: "",
			maintenance: "",
			photo: "",
		},
		exterior_locks: {
			condition: "Excellent",
			maintenance: "",
			photo: "",
		},
	};

	return (
		<div style={{padding: "12px"}}>{
			["deck", "railing", "skirting", "steps", "roof", "exterior_doors", "exterior_locks"]
			.filter((key) => {
				const catalogue = data[key] || {};
				return catalogue.condition || catalogue.maintenance || catalogue.photo || catalogue.status;
			})
			.map((key) => <ViewerItem {...data[key]} _key={key} />)
		}</div>
	)
};

Viewer.defaultProps = {
};

Viewer.propTypes = {
};

export default Viewer;
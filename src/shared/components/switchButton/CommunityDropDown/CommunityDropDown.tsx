import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
	group as Groups,
	knowledge as Readers,
	education as Education,
} from "../../../svgComponents/index";

class DropDown extends Component<any> {
	render() {
		return (
			<div className="drop-down">
				<ul className="drop-down__list">
					<li className="drop-down__list-item">
						<Link to="/main">
							<Readers />
							<span>قراء</span>
						</Link>
					</li>
					<li className="drop-down__list-item">
						<Link to="/main">
							<Education />
							<span>اشهر الكتيبات</span>
						</Link>
					</li>
					<li className="drop-down__list-item">
						<Link to="/main">
							<Groups />
							<span>مجموعات</span>
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default DropDown;

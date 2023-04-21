import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Link} from "react-router-dom";

const TopPicks = () => {
	return (
		<div>
			<div className="animate__animated animate__fast animate__fadeIn container pt-5 pb-4">
				<div className="d-flex flex-wrap gap-2">
					<button className="my-badge my-bg-primary my-text-black">#เทคโนอินเตอร์</button>
					<button className="my-badge my-bg-primary my-text-black">#ส้มตำ</button>
					<button className="my-badge my-bg-primary my-text-black">#ข้าวราดแกง</button>
					<button className="my-badge my-bg-primary my-text-black">#ก๋วยเตี๋ยว</button>
					<button className="my-badge my-bg-primary my-text-black">#ข้าวมันไก่</button>
					<button className="my-badge my-bg-primary my-text-black">#อาหารตามสั่ง</button>
					<button className="my-badge my-bg-primary my-text-black">#อิสลาม</button>
					<button className="my-badge my-bg-primary my-text-black">#ขนมหวาน</button>
					<button className="my-badge my-bg-primary my-text-black">#ร้านน้ำ</button>
					<button className="my-badge my-bg-primary my-text-black">#อื่น ๆ</button>
				</div>
				<Link to={`/orders/create`}
				      className="font-primary my-btn my-btn-green btn-block fw-semibold fs-4 mt-3 text-center text-truncate">
					<FontAwesomeIcon className="me-3" icon={solid("motorcycle")}/>
					ซื้อข้าวให้เพื่อน แง๊น แง๊นน~~
				</Link>
			</div>
		</div>
	);
}

export default TopPicks;

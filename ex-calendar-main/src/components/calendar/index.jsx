import React from "react";
import moment from "moment";
import styles from "./style.css";
import { enToNumber, numberToEn, getWeek, getWeekNum } from "../../utils/funcs";
import { isDOMComponentElement } from "react-dom/test-utils";

class Calendar extends React.Component {
	temp;
	handleChangeTime = (e) => {
		let isNextMonth = e.target.className === "right";
		isNextMonth ? this.renderElements("right") : this.renderElements("left");
	};

	renderElements = (direction) => {
		this.addDateElements(direction);
		this.changeCalendarHead(direction);
		this.addFillDateElements(direction);
	};

	addFillDateElements = () => {
		this.fillLastDateElements();
		this.fillNextDateElemets();
	};

	fillLastDateElements = () => {
		let lastMonthYearMessage = this.getMonthYear("left");
		let lastLen = lastMonthYearMessage.monthDates;
		let headDiv = document.getElementsByClassName("first")[0];
		let unfillLen = 7 - (headDiv.innerHTML.split("\n").length - 1);
		let tempElements = "";
		let result = "";
		for (let i = lastLen - unfillLen + 1; i <= lastLen; i++) {
			tempElements += `<span class="last-month">${i}</span>\n`;
		}
		result = tempElements + headDiv.innerHTML.split("\n").join("\n");
		headDiv.innerHTML = result;
	};

	fillNextDateElemets = () => {
		let tailDiv = document.getElementsByClassName("fifth")[0];
		let unfillLen = 7 - (tailDiv.innerHTML.split("\n").length - 1);
		let tempElements = "";
		let result = "";
		for (let i = 1; i <= unfillLen; i++) {
			tempElements += `<span class="last-month">0${i}</span>\n`;
		}
		result = tailDiv.innerHTML.split("\n").join("\n") + tempElements;
		tailDiv.innerHTML = result;
	};

	addDateElements = (direction) => {
		let monthYearMessage = this.getMonthYear(direction);
		let weekNum = getWeekNum(monthYearMessage.HeadDayWeek);
		let len = monthYearMessage.monthDates;
		let weeks = document.getElementsByClassName("weeks")[0];
		let tempElements = "";
		let n;
		weeks.innerHTML = "";
		if (weekNum === 7) {
			weekNum = 0;
		}
		for (let i = 1; i <= len; i++) {
			n = parseInt((i + weekNum) / 7 - 1);
			i < 10
				? (tempElements += `<span>0${i}</span>\n`)
				: (tempElements += `<span>${i}</span>\n`);
			if ((i + weekNum) % 7 === 0) {
				let div = this.createDiv(n);
				div.innerHTML = tempElements;
				weeks.appendChild(div);
				tempElements = "";
			}
		}
		if (n === 3 || weekNum === 7) {
			let elementsArray = tempElements.split("\n");
			let divFifth = this.createDiv(4);
			elementsArray.pop();
			if (elementsArray.length < 7) {
				divFifth.innerHTML = tempElements;
				weeks.appendChild(divFifth);
			} else {
				this.diffAddLastRowElements(divFifth, elementsArray);
			}
		}
	};

	diffAddLastRowElements = (divFifth, elementsArray) => {
		let len = elementsArray.length;
		let firstELement = `<span class="combin">${elementsArray[0]} / ${elementsArray[len - 1]}</span>\n`;
		let restElements = "";
		for (let i = 1; i < len - 1; i++) {
			restElements += `<span>${elementsArray[i]}\n</span>`;
		}
		divFifth.innerHTML = firstELement + restElements;
	};

	createDiv = (n) => {
		let rows = ["first", "second", "third", "fourth", "fifth"];
		let div = document.createElement("div");
		div.className = rows[n];
		return div;
	};

	changeCalendarHead = (direction) => {
		let calendarHead = document.getElementById("calendarHead");
		let monthYear = this.getMonthYear(direction).monthYear;
		let monthNum = parseInt(moment(monthYear).format("MM"));
		let monthEn = numberToEn(monthNum);
		let year = moment(monthYear).format("YYYY");
		calendarHead.innerText = `${monthEn} ${year}`;
	};

	getMonthYear = (direction) => {
		let monthYear;
		let monthDates;
		let now = this.getNow();
		let HeadDayWeek;
		if (direction === "right") {
			now.month < 12
				? (monthYear = `${now.year}-${now.month + 1}`)
				: (monthYear = this.changeYear(direction, now.year));
			monthDates = moment(monthYear, "YYYY-M").daysInMonth();
		} else {
			now.month > 1
				? (monthYear = `${now.year}-${now.month - 1}`)
				: (monthYear = this.changeYear(direction, now.year));
			monthDates = moment(monthYear, "YYYY-M").daysInMonth();
		}
		HeadDayWeek = getWeek(moment(monthYear).day());
		return {
			monthYear,
			monthDates,
			HeadDayWeek,
		};
	};

	getNow = () => {
		let calendarHead = document
			.getElementById("calendarHead")
			.innerText.split(" ");
		let month = enToNumber(calendarHead[0]);
		let year = parseInt(calendarHead[1]);
		return {
			year: year,
			month: month,
		};
	};

	changeYear = (direction, year) => {
		if (direction === "right") {
			return `${year + 1}-1`;
		} else {
			return `${year - 1}-12`;
		}
	};

	render() {
		return (
			<div className="container">
				<div className="calendar">
					<div className="front">
						<div className="current-date">
							<div className="left" onClick={this.handleChangeTime}></div>
							<div className="right" onClick={this.handleChangeTime}></div>
							<h1 id="calendarHead">January 2016</h1>
						</div>
						<div className="current-month">
							<ul className="week-days">
								<li>SUN</li>
								<li>MON</li>
								<li>TUE</li>
								<li>WED</li>
								<li>THU</li>
								<li>FRI</li>
								<li>SAT</li>
							</ul>
							<div className="weeks">
								<div className="first">
									<span className="last-month">27</span>
									<span className="last-month">28</span>
									<span className="last-month">29</span>
									<span className="last-month">30</span>
									<span className="last-month">31</span>
									<span onClick={this.test}>01</span>
									<span>02</span>
								</div>
								<div className="second">
									<span>03</span>
									<span>04</span>
									<span>05</span>
									<span className="event">06</span>
									<span>07</span>
									<span>08</span>
									<span>09</span>
								</div>
								<div className="third">
									<span>10</span>
									<span>11</span>
									<span>12</span>
									<span>13</span>
									<span>14</span>
									<span className="active">15</span>
									<span>16</span>
								</div>
								<div className="fourth">
									<span>17</span>
									<span>18</span>
									<span>19</span>
									<span>20</span>
									<span>21</span>
									<span>22</span>
									<span>23</span>
								</div>
								<div className="fifth">
									<span>24</span>
									<span>25</span>
									<span>26</span>
									<span>27</span>
									<span>28</span>
									<span>29</span>
									<span>30</span>
								</div>
							</div>
						</div>
					</div>
					<div className="back">
						<input placeholder="What's the event?" />
						<div className="info">
							<div className="date">
								<p className="info-date">
									Date: <span>Jan 15th, 2016</span>
								</p>
								<p className="info-time">
									Time: <span>6:35 PM</span>
								</p>
							</div>
							<div className="address">
								<p>
									Address: <span>129 W 81st St, New York, NY</span>
								</p>
							</div>
							<div className="observations">
								<p>
									Observations: <span>Be there 15 minutes earlier</span>
								</p>
							</div>
						</div>
						<div className="actions">
							<button className="save">
								Save <i className="ion-checkmark" />
							</button>
							<button className="dismiss">
								Dismiss <i className="ion-android-close" />
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Calendar.propTypes = {};

export default Calendar;

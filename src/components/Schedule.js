import Accordian from "./Accordian";

function Schedule({ headers, days }) {
	const daysOfWeek = Object.values(days);

	return (
		<section className="schedule-section">
			<h2>Opening Times</h2>
			<table>
				<thead>
					<tr>
						{headers.map((header, idx) => (
							<th key={idx}>{header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{daysOfWeek.map((day, idx) => (
						<tr key={idx}>
							<td>{day.day}</td>
							<td>{day.open}</td>
							<td>{day.close}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}

export default Schedule;

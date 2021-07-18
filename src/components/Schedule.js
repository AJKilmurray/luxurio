import ScrollAnimation from "react-animate-on-scroll";

function Schedule({ headers, days }) {
	const daysOfWeek = Object.values(days);

	return (
		<section className="schedule-section">
			<ScrollAnimation animateIn="animate__rotateIn" animateOnce={true}>
				<h2>Opening Times</h2>
			</ScrollAnimation>
			<ScrollAnimation animateIn="animate__zoomIn" animateOnce={true} delay={700}>
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
			</ScrollAnimation>
		</section>
	);
}

export default Schedule;

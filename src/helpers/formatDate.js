import { format } from 'date-fns'
import { zonedTimeToUtc } from 'date-fns-tz'

export default function formatDate(applicable_date, timezone) {
	let utcDate = zonedTimeToUtc(applicable_date, timezone)
	return format(utcDate, "EEE', 'd' 'MMM")
}

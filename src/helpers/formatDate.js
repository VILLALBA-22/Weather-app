import { format } from 'date-fns'
export default function formatDate(applicable_date) {
	const date = applicable_date.split('-')
	const year = date[0]
	const month = date[1]
	const day = date[2]
	return format(Date.UTC(year, month, day), "EEE', 'd' 'MMM")
}

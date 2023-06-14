export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('locales', { dateStyle: 'long' }).format(new Date(dateString))
}
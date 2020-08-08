import { format } from 'date-fns'

export default function (date) {
    return date ? format(new Date(date), 'dd MMM yyyy') : ''
}
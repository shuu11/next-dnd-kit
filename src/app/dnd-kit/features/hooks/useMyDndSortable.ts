import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

type RetType = {
	sortableProp: {
		ref: (node: HTMLElement | null) => void
		style: React.CSSProperties
	}
}

export const useMySortable = (id: string): RetType => {
	const { setNodeRef, transform, transition, attributes, listeners } = useSortable({
		id,
	})

	const style: React.CSSProperties = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	const sortableProp = {
		ref: setNodeRef,
		style,
		...attributes,
		...listeners,
	}

	return { sortableProp }
}

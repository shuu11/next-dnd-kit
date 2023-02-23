import { arrayMove } from '@dnd-kit/sortable'
import type { StateDnd, StateDndCard } from '@s/recoil/stateDnd'

export function removeCardIndex<T extends StateDnd>(item: T, id: string): T {
	return { ...item, dndCard: item.dndCard.filter((card) => card.uuid !== id) }
}

export function insertCardIndex<T extends StateDnd>(
	item: T,
	oldCard: StateDndCard,
	newIndex: number,
): T {
	return {
		...item,
		dndCard: [...item.dndCard.slice(0, newIndex), oldCard, ...item.dndCard.slice(newIndex)],
	}
}

export function moveCard<T extends StateDnd>(item: T, oldIndex: number, newIndex: number): T {
	return { ...item, dndCard: arrayMove(item.dndCard, oldIndex, newIndex) }
}

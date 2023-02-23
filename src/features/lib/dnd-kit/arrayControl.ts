import { arrayMove } from '@dnd-kit/sortable'
import type { StateDnd, StateDndCard } from '@s/recoil/stateDnd'

export function removeCardIndex(item: StateDnd, id: string): StateDnd {
	return { ...item, dndCard: item.dndCard.filter((card) => card.uuid !== id) }
}

export function insertCardIndex(item: StateDnd, oldCard: StateDndCard, newIndex: number): StateDnd {
	return {
		...item,
		dndCard: [...item.dndCard.slice(0, newIndex), oldCard, ...item.dndCard.slice(newIndex)],
	}
}

export function moveCard(item: StateDnd, oldIndex: number, newIndex: number): StateDnd {
	return { ...item, dndCard: arrayMove(item.dndCard, oldIndex, newIndex) }
}

import type { UniqueIdentifier } from '@dnd-kit/core'
import type { StateDnd } from '@s/recoil/stateDnd'
import type { StateActiveDndCard } from '@s/recoil/stateActiveDndCard'

type Prop = {
	items: StateDnd[]
	id?: UniqueIdentifier
}

type RetType = StateActiveDndCard

export function getDndInfo(prop: Prop): RetType | undefined {
	const { items, id } = prop

	for (let i = 0; i < items.length; i++) {
		const item = items[i]
		const card = item.dndCard.find((card) => card.uuid === id?.toString())

		if (card) {
			return {
				index: i,
				area: item.dndArea,
				cardIndex: item.dndCard.indexOf(card),
				card,
				cardId: card.uuid.toString(),
				cardName: card.name.toString(),
				isLastCard: item.dndCard.length <= 1,
			}
		}
	}

	return undefined
}

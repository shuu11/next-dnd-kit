import { atom } from 'recoil'
import type { StateDndCard } from './stateDnd'

export type StateActiveDndCard = {
	index: number
	area: string
	cardIndex: number
	card: StateDndCard
	cardId: string
	cardName: string
	isLastCard: boolean
}

export const stateActiveDndCard = atom<StateActiveDndCard | null>({
	key: 'stateActiveDndCard',

	default: null,
})

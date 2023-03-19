import { atom } from 'recoil'
import { v4 as uuidv4 } from 'uuid'

export type StateDndCard = {
	uuid: string
	name: string
}

export type StateDnd = {
	dndArea: string
	dndCard: StateDndCard[]
}

export const stateDnd = atom<StateDnd[]>({
	key: 'stateDnd',

	default: [
		{
			dndArea: 'dndArea1',
			dndCard: [
				{ uuid: uuidv4(), name: '@1' },
				{ uuid: uuidv4(), name: '@2' },
				{ uuid: uuidv4(), name: '@3' },
				{ uuid: uuidv4(), name: '@4' },
				{ uuid: uuidv4(), name: '@5' },
				{ uuid: uuidv4(), name: '@6' },
			],
		},
		{
			dndArea: 'dndArea2',
			dndCard: [
				{ uuid: uuidv4(), name: '@7' },
				{ uuid: uuidv4(), name: '@8' },
				{ uuid: uuidv4(), name: '@9' },
				{ uuid: uuidv4(), name: '@10' },
				{ uuid: uuidv4(), name: '@11' },
				{ uuid: uuidv4(), name: '@12' },
			],
		},
		{
			dndArea: 'dndArea3',
			dndCard: [
				{ uuid: uuidv4(), name: '@13' },
				{ uuid: uuidv4(), name: '@14' },
				{ uuid: uuidv4(), name: '@15' },
				{ uuid: uuidv4(), name: '@16' },
				{ uuid: uuidv4(), name: '@17' },
				{ uuid: uuidv4(), name: '@18' },
			],
		},
	],
})

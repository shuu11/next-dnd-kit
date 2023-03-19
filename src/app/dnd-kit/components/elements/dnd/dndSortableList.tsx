import { useRecoilValue } from 'recoil'
import { useMySortable } from '@a/features/hooks/useMyDndSortable'
import { stateActiveDndId } from '@s/recoil/stateActiveDndId'
import type { StateDndCard } from '@s/recoil/stateDnd'

type Prop = {
	card: StateDndCard
}

export default function DndSortableList(prop: Prop) {
	const { card } = prop
	const { uuid, name } = card

	const { sortableProp } = useMySortable(uuid)

	const activeId = useRecoilValue(stateActiveDndId)

	const className = activeId === uuid ? 'bg-blockDnd hover:bg-blockDnd shadow-2xl' : ''

	return (
		<li className="flex-col-center w-full" {...sortableProp}>
			<button className={`w-70/100 py-[2rem] rounded-50px ${className}`}>Item {name}</button>
		</li>
	)
}

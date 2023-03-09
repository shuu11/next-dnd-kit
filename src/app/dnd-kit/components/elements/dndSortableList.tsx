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

	const className = activeId === uuid ? 'sortable-item dragging-dbd-kit' : 'sortable-item'

	return (
		<li {...sortableProp} className={className}>
			<div>Item {name}</div>
		</li>
	)
}

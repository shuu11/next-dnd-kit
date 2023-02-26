import { useRecoilState } from 'recoil'
import { useMySortable } from '@a/features/hooks/useMyDndSortable'
import { stateActiveDndCard } from '@s/recoil/stateActiveDndCard'
import type { StateDndCard } from '@s/recoil/stateDnd'

type Prop = {
	card: StateDndCard
}

export default function DndSortableList(prop: Prop) {
	const { card } = prop
	const { uuid, name } = card

	const { sortableProp } = useMySortable(uuid)

	const [activeCard] = useRecoilState(stateActiveDndCard)

	const className = activeCard?.cardId === uuid ? 'sortable-item dragging-dbd-kit' : 'sortable-item'

	return (
		<li {...sortableProp} className={className}>
			<div>Item {name}</div>
		</li>
	)
}

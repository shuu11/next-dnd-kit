import { rectSortingStrategy, SortableContext } from '@dnd-kit/sortable'

import { useRecoilValue } from 'recoil'
import SortableList from './dndSortableList'
import { useMyDroppable } from '@a/features/hooks/useMyDndDroppable'
import { stateDnd } from '@s/recoil/stateDnd'

type Prop = {
	dndArea: string
}

export default function DndDroppableArea(prop: Prop) {
	const { dndArea } = prop

	const items = useRecoilValue(stateDnd)

	const { droppableProps } = useMyDroppable(dndArea)

	const index = items.findIndex((item) => item.dndArea === dndArea)

	const cardIds = items[index].dndCard.map((card) => card.uuid)

	return (
		<SortableContext items={cardIds} strategy={rectSortingStrategy}>
			<div className="w-[calc(33%-5px)]" {...droppableProps}>
				<div className="pt-100px p-20px bg-blue-500">
					<ul className="flex-col-center gap-10px p-0">
						{items[index].dndCard.map((card) => (
							<SortableList key={card.uuid} card={card} />
						))}
					</ul>
				</div>
			</div>
		</SortableContext>
	)
}

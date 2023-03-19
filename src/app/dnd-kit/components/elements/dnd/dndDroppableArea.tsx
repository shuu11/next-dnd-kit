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
			<section className="w-25/100 mt-30px" {...droppableProps}>
				<h2 className="text-2xl font-bold text-center">{dndArea}</h2>

				<ul className="flex-col-center gap-[2rem] mt-[2rem]">
					{items[index].dndCard.map((card) => (
						<SortableList key={card.uuid} card={card} />
					))}
				</ul>
			</section>
		</SortableContext>
	)
}

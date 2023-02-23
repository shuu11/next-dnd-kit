import { DndContext } from '@dnd-kit/core'
import DndDroppableArea from './dndDroppableArea'
import { useMyDndContext } from '@f/hooks/dnd-kit/useMyDndContext'

export default function DndWrapper() {
	const { dndContextProps } = useMyDndContext()

	return (
		<>
			<DndContext {...dndContextProps}>
				<DndDroppableArea dndArea={'dndArea1'} />

				<DndDroppableArea dndArea={'dndArea2'} />

				<DndDroppableArea dndArea={'dndArea3'} />
			</DndContext>
		</>
	)
}

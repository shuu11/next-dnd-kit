import type {
	SensorDescriptor,
	SensorOptions,
	CollisionDetection,
	DragStartEvent,
	DragEndEvent,
	DragOverEvent,
} from '@dnd-kit/core'
import { closestCorners, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable'

import { useRecoilState, useSetRecoilState } from 'recoil'
import { removeCardIndex, insertCardIndex, moveCard } from '@a/features/lib/arrayControl'
import { getDndInfo } from '@a/features/lib/getDndInfo'
import { stateActiveDndId } from '@s/recoil/stateActiveDndId'
import { stateDnd } from '@s/recoil/stateDnd'

type DndContextProps = {
	sensors: SensorDescriptor<SensorOptions>[]
	autoscroll: boolean
	collisionDetection: CollisionDetection
	onDragStart: (e: DragStartEvent) => void
	onDragEnd: (e: DragEndEvent) => void
	onDragOver: (e: DragOverEvent) => void
	onDragCancel: () => void
}

type RetType = {
	dndContextProps: DndContextProps
}

export const useMyDndContext = (): RetType => {
	const [items, setItems] = useRecoilState(stateDnd)
	const setActiveCard = useSetRecoilState(stateActiveDndId)

	/**
	 * sensors
	 */
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	)

	/**
	 * useDragStart
	 */
	const useDragStart = (e: DragStartEvent) => {
		const dragId = e.active.id.toString()

		const dragDndInfo = getDndInfo({ items: items, id: dragId })

		if (!dragDndInfo || dragDndInfo.isLastCard) return

		setActiveCard(dragDndInfo.cardId)
	}

	/**
	 * useDragEnd
	 */
	const useDragEnd = (e: DragEndEvent) => {
		setActiveCard(null)

		const dragId = e.active.id.toString()
		const overId = e.over?.id.toString()

		const dragCardInfo = getDndInfo({ items: items, id: dragId })
		const overCardInfo = getDndInfo({ items: items, id: overId })

		if (dragId === overId || !dragCardInfo || !overCardInfo || dragCardInfo.isLastCard) return

		setItems((items) => {
			const { cardIndex: dragCardIndex } = dragCardInfo
			const { index: overIndex, cardIndex: overCardIndex } = overCardInfo

			return items.map((item, index) => {
				switch (index) {
					case overIndex:
						return moveCard(item, dragCardIndex, overCardIndex)
						break

					default:
						return { ...item }
						break
				}
			})
		})
	}

	/**
	 * useDragOver
	 */
	const useDragOver = (e: DragOverEvent) => {
		const dragId = e.active.id.toString()
		const overId = e.over?.id.toString()

		const dragCardInfo = getDndInfo({ items: items, id: dragId })
		const overCardInfo = getDndInfo({ items: items, id: overId })

		if (
			dragId === overId ||
			!dragCardInfo ||
			!overCardInfo ||
			dragCardInfo.isLastCard ||
			dragCardInfo.area === overCardInfo.area
		) {
			return
		}

		setItems((items) => {
			const { index: dragIndex, card: dragCard, cardId: dragCardId } = dragCardInfo
			const { index: overIndex, cardIndex: overCardIndex } = overCardInfo

			return items.map((item, index) => {
				switch (index) {
					case dragIndex:
						return removeCardIndex(item, dragCardId)
						break
					case overIndex:
						return insertCardIndex(item, dragCard, overCardIndex)
						break
					default:
						return { ...item }
						break
				}
			})
		})
	}

	/**
	 * useDragCancel
	 */
	const useDragCancel = () => setActiveCard(null)

	const dndContextProps = {
		sensors: sensors,
		autoscroll: false,
		collisionDetection: closestCorners,
		onDragStart: useDragStart,
		onDragEnd: useDragEnd,
		onDragOver: useDragOver,
		onDragCancel: useDragCancel,
	}

	return { dndContextProps }
}

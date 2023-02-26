import DndWrapper from '@a/components/elements/dndWrapper'

export default function Index() {
	return (
		<>
			<div>
				<div className="toolbar">
					<div className="title">Sorting Libraries</div>
				</div>

				<div className="content">
					<div className="container">
						<div className="library-name">@dnd-kit</div>
						<div className="list">
							<div className="gap-30px flex flex-auto flex-row">
								<DndWrapper />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

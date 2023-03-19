import Header from '@a/components/layout/header'
import Hr from '@a/components/layout/hr'
import Article from '@a/components/layout/article'

export default function Index() {
	return (
		<>
			<div className="max-w-[1920px] mx-auto px-[2rem] mb-[10rem]">
				<Header />
				<Hr />
				<Article />
			</div>
		</>
	)
}

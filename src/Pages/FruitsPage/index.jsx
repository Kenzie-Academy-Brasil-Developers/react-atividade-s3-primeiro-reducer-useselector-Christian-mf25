//importando useSelector do react-redux
import { useSelector } from "react-redux"
import Fruits from "../../components/Fruits"

const FruitsPage = () => {
	//acessando o estado global e pegando o state fruits
	const fruits = useSelector((state) => state.fruits)

	return (
		<div>
			{fruits.map((item) => (
				<Fruits
					key={item.name}
					fruit={item.fruit}
					image={item.image}
				/>
			))}
		</div>
	)
}

export default FruitsPage
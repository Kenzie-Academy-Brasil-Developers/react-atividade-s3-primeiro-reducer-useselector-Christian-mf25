import "./style.css"
const Fruits = ({ fruit, image }) => {

	return (

		<section className="container">
			<h3>{fruit}</h3>
			<img src={image} alt={fruit} />
		</section>
	)

}

export default Fruits
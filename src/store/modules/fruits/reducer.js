// const initialState = ["Banana", "Maçã", "Morango"]

const initialState = [
	{
		fruit: "Banana",
		image: "https://static.vecteezy.com/system/resources/previews/001/208/658/non_2x/banana-png.png"
	},
	{
		fruit: "Maçã",
		image: "https://i.pinimg.com/originals/a1/ee/97/a1ee9796415e11f066f081f238a3a184.png"
	},
	{
		fruit: "Morango",
		image: "https://imagensemoldes.com.br/wp-content/uploads/2018/07/Imagem-de-Frutas-Morango-8-PNG.png"
	}
]

const fruitsReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
};

export default fruitsReducer
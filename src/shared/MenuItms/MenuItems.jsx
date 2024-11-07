

const MenuItems = ({item}) => {
    const {name,recipe,price,image}=item;
    return (
        <div className="flex">
            <img src={image} className="w-[100px] rounded-full mr-5" alt="" />
            <div>
                <h3 className="text-2xl font-semibold uppercase ">{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">{price}</p>
        </div>
    );
};

export default MenuItems;
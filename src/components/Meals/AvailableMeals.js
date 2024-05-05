import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import chickenEmpanada from "../../assests/ChickenEmpanada (1).png";
import beefEmpanada from "../../assests/BeefEmpanada (2).png";
import mangoDelight from "../../assests/MangoDelight.png";
import berryMilky from "../../assests/StrawberryMilkshake (2).png";
import oreoGalaxy from "../../assests/OreoGalaxy (2) (1).png";
import chocoLoaded from "../../assests/ChocoFrappe (1).png";
import blueLemonade from "../../assests/bluelemonade (1).png";
import strawberryLemon from "../../assests/strawberrylemonade.png";
import passionFruit from "../../assests/PassionFruit.png";

const DUMMY_MEALS = [
  {
    id: "m1",
    image: <img src={chickenEmpanada} alt="" />,
    name: "Chicken Empanada",
    description: "",
    price: 30.00,
  },
  {
    id: "m2",
    image: <img src={beefEmpanada} alt="" />,
    name: "Beef Empanada",
    description: "",
    price: 35.00,
  },
  {
    id: "m3",
    image: <img src={mangoDelight} alt="" />,
    name: "Mango Delight",
    description: "",
    price: 30.00,
  },
  {
    id: "m4",
    image: <img src={berryMilky} alt="" />,
    name: "Berry Milky",
    description: "",
    price: 50.00,
  },

  {
    id: "m5",
    image: <img src={oreoGalaxy} alt="" />,
    name: "Oreo Galaxy",
    description: "",
    price: 50.00,
  },

  {
    id: "m6",
    image: <img src={chocoLoaded} alt="" />,
    name: "Choco Loaded",
    description: "",
    price: 45.00,
  },
  
  {
    id: "m7",
    image: <img src={blueLemonade} alt="" />,
    name: "Blue Lemonade",
    description: "",
    price: 35.00,
  },

  {
    id: "m8",
    image: <img src={strawberryLemon} alt="" />,
    name: "Strawberry Lemon",
    description: "",
    price: 35.00,
  },

  {
    id: "m9",
    image: <img src={passionFruit} alt="" />,
    name: "Passion Fruit",
    description: "",
    price: 35.00,
  },

];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      image={meal.image}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;

import classes from "./MealsSummary.module.css";
import facebook from "../../assests/facebook.png";
import instagram from "../../assests/instagram.png";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Your convenient healthy snack!</h2>
      <p>Crafted with love and filled with unique flavors,</p>
      <p>
        our empanadas and milkshakes are sure to delight your taste buds with
        every bite and sip.
      </p>
      <p>Enjoy this healthy meal and snack on-the-go.</p>

      <h6> </h6>

      <h4>
        <img src={facebook} alt="" />
      </h4>

      <h4>AVC Company</h4>

      <h5> </h5>
      <h5> </h5>
      <h5> </h5>
      

      <h5>
        <img src={instagram} alt="" />
        <tab> @AVCcompany</tab>
      </h5>

     
    </section>
  );
};

export default MealsSummary;

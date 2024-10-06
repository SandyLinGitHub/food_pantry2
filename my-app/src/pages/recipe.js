import React from 'react';
import './recipe.css';
import pasta from '../assets/pasta.jpg'
//https://cookidoo.thermomix.com/recipes/recipe/en-US/r69338 
import fried_rice from '../assets/mushroom_fried_rice.jpg'
//https://www.kitchenathoskins.com/mushroom-fried-rice/
import lentil from '../assets/lentil_salad.png'
//https://downshiftology.com/recipes/lentil-salad/

function RecipePage() {
  return (
    <div className="recipe-page">
      {/* Featured Section */}
      <div className="featured-recipe">
        <h2>Featured Recipe Images</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo 
          sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.
        </p>
        <button className="primary-btn">Get Started</button>
        <button className="secondary-btn">Learn more</button>
      </div>

      {/* Recipe Grid Section */}
      <div className="recipe-list">
        <h2>Recipe</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo 
          sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.
        </p>

        <div className="recipe-grid">
          <div className="recipe-card">
            <img src={fried_rice} alt="mushroom fried rice" className="recipe-image" />
            <h3>Recipe 1</h3>
            <p>
              Lorem ipsum dolor sit amet nulla adipiscing elit. Nunc maximus, nulla nec ut commodo.
            </p>
            <button className="primary-btn">Learn more</button>
          </div>
          <div className="recipe-card">
            <img src={pasta} alt="pasta" className="recipe-image" />
            <h3>Recipe 2</h3>
            <p>
              Lorem ipsum dolor sit amet nulla adipiscing elit. Nunc maximus, nulla nec ut commodo.
            </p>
            <button className="primary-btn">Learn more</button>
          </div>
          <div className="recipe-card">
            <img src={lentil} alt="lentil salad" className="recipe-image" />
            <h3>Recipe 3</h3>
            <p>
              Lorem ipsum dolor sit amet nulla adipiscing elit. Nunc maximus, nulla nec ut commodo.
            </p>
            <button className="primary-btn">Learn more</button>
          </div>
        </div>
      </div>

      {/* Submit Your Recipe Section */}
      <div className="share-recipe">
        <h2>Share your recipe today!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo 
          sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.
        </p>
        <form className="recipe-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Your Message..."></textarea>
          <label>
            Upload file:
            <input type="file" />
          </label>
          <button type="submit" className="primary-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default RecipePage;

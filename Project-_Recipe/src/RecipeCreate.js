import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  const recipeObject = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...recipeObject });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes([...recipes, formData]);
    // setType("Text");
    setFormData({ ...recipeObject });
  };
return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name </label>
              <input
                id="name"
                name="name"
                required={true}
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <label htmlFor="cuisine">Cuisine</label>
              <input
                id="cuisine"
                name="cuisine"
                required={true}
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <label htmlFor="photo">Photo</label>
              <input
                id="photo"
                name="photo"
                type="url"
                required={true}
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <label htmlFor="ingredients">Ingredients</label>
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                required={true}
                rows={3}
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <label htmlFor="preparation">Preparation</label>
              <textarea
                id="preparation"
                name="preparation"
                type="text"
                required={true}
                rows={3}
                onChange={handleChange}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
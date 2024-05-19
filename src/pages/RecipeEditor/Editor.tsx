import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const numbersHours = Array.from({ length: 24 }, (_, i) => i);
const numbersMinutes = Array.from({ length: 60 }, (_, i) => i + 1);

function RecipeEditor() {
    const [desc, setDesc] = useState("");
    const maxDescLength = 150;
    const [image, setImage] = useState("");
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = (event.target.files || [])[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result as string);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const handleImageRemove = () => {
        setImage("");
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDesc(e.target.value);
    };

    const [cookingTime, setCookingTime] = useState({ hours: "", minutes: "" });
    const [prepTime, setPrepTime] = useState({ hours: "", minutes: "" });

    const handleCookingTimeChange = (event: SelectChangeEvent<string>, name: string) => {
        setCookingTime({ ...cookingTime, [name]: event.target.value });
    };

    const handlePrepTimeChange = (event: SelectChangeEvent<string>, name: string) => {
        setPrepTime({ ...prepTime, [name]: event.target.value });
    };

    const [ingredients, setIngredients] = useState<string[]>(['']);
    const [steps, setSteps] = useState<string[]>(['']);

    const handleAddIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const handleRemoveIngredient = (index: number) => {
        setIngredients(ingredients.filter((_, i) => i !== index));
    };

    const handleIngredientChange = (index: number, event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const newIngredients = ingredients.map((ingredient, i) => (i === index ? event.target.value : ingredient));
        setIngredients(newIngredients);
    };

    const handleAddStep = () => {
        setSteps([...steps, '']);
    };

    const handleRemoveStep = (index: number) => {
        setSteps(steps.filter((_, i) => i !== index));
    };

    const handleStepChange = (index: number, event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const newSteps = steps.map((step, i) => (i === index ? event.target.value : step));
        setSteps(newSteps);
    };

    return (
        <main>
            <div className="max-w-2xl mx-auto rounded-lg p-6">
                <h1 className="text-2xl font-semibold mb-4">Create a new recipe</h1>
                <TextField
                    className="bg-white"
                    size="small"
                    label="Title"
                    fullWidth
                    placeholder="Recipe Title"
                />

                <div className="mb-4 w-1/2">
                    <div className="flex flex-col items-start my-4">
                        <label className="block text-gray-700 mb-2">Image:</label>
                        {image && (
                            <div className={"relative"}>
                                <img src={image} alt="Recipe Image" className="w-full object-cover rounded mb-2"/>
                                <button
                                    className="bg-gray-200 text-error hover:bg-error hover:text-white py-1 px-2 rounded absolute bottom-4 right-2"
                                    onClick={handleImageRemove}
                                >
                                    Remove
                                </button>
                            </div>
                        )}
                        <div>
                            {!image && (
                                // place holder image
                                <div className="relative">
                                <img src="https://via.placeholder.com/150" alt="Recipe Image"
                                     className="w-1/2 object-cover rounded mb-2"/>
                                <input type="file" accept="image/*"
                                       className="bg-gray-300 text-gray-700 py-1 px-3 rounded mt-2"
                                       onChange={handleImageChange}/>
                            </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                <TextField
                        className="bg-white"
                        onChange={handleDescriptionChange}
                        label="Description"
                        error={desc.length >= maxDescLength}
                        multiline
                        minRows={2}
                        placeholder="Introduce your recipe"
                        fullWidth
                        inputProps={{maxLength: maxDescLength}}
                    />
                    <p className="text-gray-500 text-right text-sm">{desc.length}/{maxDescLength}</p>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Ingredients:</label>
                    <div className="space-y-2">
                        {ingredients.map((ingredient, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <TextField
                                    className="bg-white flex-1"
                                    size="small"
                                    fullWidth
                                    placeholder={`Ingredient ${index + 1}`}
                                    value={ingredient}
                                    onChange={(e) => handleIngredientChange(index, e)}
                                />
                                <button
                                    className="bg-gray-200 text-error hover:bg-error hover:text-white py-1 px-2 rounded"
                                    onClick={() => handleRemoveIngredient(index)}
                                >
                                    -
                                </button>
                            </div>
                        ))}
                        <button className="text-primary hover:text-accent" onClick={handleAddIngredient}>+ Ingredient
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Instructions:</label>
                    <div className="space-y-4">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-start space-x-2">
                                <span className="text-gray-500">Step {index + 1}</span>
                                <TextField
                                    className="bg-white flex-1"
                                    size="small"
                                    multiline
                                    fullWidth
                                    placeholder={`Instruction ${index + 1}`}
                                    value={step}
                                    onChange={(e) => handleStepChange(index, e)}
                                />
                                <button
                                    className="bg-gray-200 text-error hover:bg-error hover:text-white py-1 px-2 rounded"
                                    onClick={() => handleRemoveStep(index)}
                                >
                                    -
                                </button>
                            </div>
                        ))}
                        <button className="text-primary hover:text-accent" onClick={handleAddStep}>+ Step</button>
                    </div>
                </div>

                <div className="mb-4 w-56">
                    <label className="block text-gray-700 mb-2">Servings:</label>
                    <TextField className="bg-white" size="small" type="number" fullWidth placeholder="#"/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Cooking Time:</label>
                    <div className="flex space-x-2 w-56">
                        <FormControl className="flex-1 bg-white">
                            <Select
                                value={cookingTime.hours}
                                onChange={(e) => handleCookingTimeChange(e, 'hours')}
                                displayEmpty
                                size="small"
                                inputProps={{'aria-label': 'Hours'}}
                            >
                                <MenuItem value="" disabled>
                                    Hours
                                </MenuItem>
                                {numbersHours.map((number) => (
                                    <MenuItem key={number} value={number}>
                                        {number + "h"}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl className="flex-1 bg-white">
                            <Select
                                value={cookingTime.minutes}
                                onChange={(e) => handleCookingTimeChange(e, 'minutes')}
                                displayEmpty
                                size="small"
                                inputProps={{'aria-label': 'Minutes'}}
                            >
                                <MenuItem value="" disabled>
                                    Minutes
                                </MenuItem>
                                {numbersMinutes.map((number) => (
                                    <MenuItem key={number} value={number}>
                                        {number + "m"}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Prep Time:</label>
                    <div className="flex space-x-2 w-56">
                        <FormControl className="flex-1 bg-white">
                            <Select
                                value={prepTime.hours}
                                onChange={(e) => handlePrepTimeChange(e, 'hours')}
                                displayEmpty
                                size="small"
                                inputProps={{'aria-label': 'Hours'}}
                            >
                                <MenuItem value="" disabled>
                                    Hours
                                </MenuItem>
                                {numbersHours.map((number) => (
                                    <MenuItem key={number} value={number}>
                                        {number + "h"}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl className="flex-1 bg-white">
                            <Select
                                value={prepTime.minutes}
                                onChange={(e) => handlePrepTimeChange(e, 'minutes')}
                                displayEmpty
                                size="small"
                                inputProps={{'aria-label': 'Minutes'}}
                            >
                                <MenuItem value="" disabled>
                                    Minutes
                                </MenuItem>
                                {numbersMinutes.map((number) => (
                                    <MenuItem key={number} value={number}>
                                        {number + "m"}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Cuisine:</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                        <option>Italian</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Collection:</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                        <option>1 Collection selected</option>
                    </select>
                </div>
                <div className="flex justify-center">
                    <button className="px-4 py-1 bg-primary hover:bg-accent text-white rounded">Publish</button>
                </div>
            </div>
        </main>
    );
}

export default RecipeEditor;

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import { FilePond, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType);

const numbersHours = Array.from({ length: 24 }, (_, i) => i);
const numbersMinutes = Array.from({ length: 60 }, (_, i) => i + 1);

const cuisines = ['Italian', 'Mexican', 'Indian', 'Chinese', 'French'];
const tagsList = ['Vegetarian', 'Vegan', 'Gluten Free', 'Dairy Free', 'Low Carb'];

function RecipeEditor() {
    const [desc, setDesc] = useState("");
    const maxDescLength = 150;

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

    const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
    const handleCuisineChange = (_event: React.SyntheticEvent, value: string[]) => {
        setSelectedCuisines(value);
    };

    const [selectedTags, setTags] = useState<string[]>([]);
    const handleAddTag = (_event: React.SyntheticEvent, value: string[]) => {
        setTags(value);
    }

    const [files, setFiles] = useState([])
    const HandleFileChange = (file: any) => {
        setFiles(files)
    }

    return (
        <main>
            <div className="max-w-3xl mx-auto rounded-2xl p-6 shadow-lg bg-white">
                <h1 className="text-2xl font-semibold mb-4">Create a new recipe</h1>
                <TextField
                    className="bg-white"
                    size="small"
                    label="Title"
                    fullWidth
                    placeholder="Black Bean & Cork Quesadillas"
                />

                <div className="my-8">
                    <label className="block text-gray-700 mb-2">Cover Image:</label>
                    <FilePond
                        files={files}
                        onupdatefiles={HandleFileChange}
                        allowMultiple={false}
                        acceptedFileTypes={['image/*']}
                        name="Cover"
                        labelIdle='Drag & Drop a cover image or <span class="filepond--label-action">Browse</span>'
                    />
                </div>

                <div className="mb-4">
                    <TextField
                        className="bg-white"
                        onChange={handleDescriptionChange}
                        label="Description"
                        error={desc.length >= maxDescLength}
                        multiline
                        minRows={2}
                        placeholder="A quick and easy mexican dish that is perfect for any party or just a simple dinner."
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
                    <TextField className="bg-white" size="small" type="number" InputProps={{ inputProps: { min: 0}}} fullWidth placeholder="#"/>
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
                    <Autocomplete
                        multiple
                        id="cuisine"
                        options={cuisines}
                        value={selectedCuisines}
                        onChange={handleCuisineChange}
                        disableCloseOnSelect
                        renderTags={(value: string[], getTagProps) =>
                            value.map((option: string, index: number) => (
                                <Chip label={option} {...getTagProps({index})} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                placeholder="Select Cuisine"
                            />
                        )}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Tags:</label>
                    <Autocomplete
                        multiple
                        id="cuisine"
                        options={tagsList}
                        value={selectedTags}
                        onChange={handleAddTag}
                        disableCloseOnSelect
                        renderTags={(value: string[], getTagProps) =>
                            value.map((option: string, index: number) => (
                                <Chip label={option} {...getTagProps({index})} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                placeholder="Add tags"
                            />
                        )}
                    />
                </div>
                <div className="flex justify-center">
                <button className="px-4 py-1 bg-primary hover:bg-accent text-white rounded">Publish</button>
                </div>
            </div>
        </main>
    );
}

export default RecipeEditor;

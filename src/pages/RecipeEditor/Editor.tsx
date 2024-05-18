import "@/main.css";
import {useState} from "react";
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function RecipeEditor() {
    const [desc, setDesc] = useState("");
    const maxDescLength = 150;
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDesc(e.target.value);
    }
    const [minutesCooking, setHour] = useState("");

    const handleHourChange = (event: SelectChangeEvent) => {
        setHour(event.target.value);
    };
    const [hoursCooking, setMinute] = useState("");
    const handleMinuteChange = (event: SelectChangeEvent) => {
        setMinute(event.target.value);
    }
    const numbersHours = Array.from({length: 99}, (_, i) => i + 1);
    const numbersMinutes = Array.from({length: 60}, (_, i) => i);
    return (
        <>
            <main>
                <div className="max-w-2xl mx-auto rounded-lg p-6">
                    <h1 className="text-2xl font-semibold mt-4 mb-4">Create a new recipe</h1>
                    <TextField
                        className={"bg-white"}
                        size={"small"}
                        label="Title"
                        fullWidth
                        placeholder={'Recipe Title'}
                    />

                    <div className="mb-4">
                        <div className="flex items-center my-4">
                            <img src="https://via.placeholder.com/150" alt="Recipe Image"
                                 className="w-24 h-24 object-cover rounded mr-4"/>
                            <div>
                                <button className="bg-blue-500 text-white py-1 px-3 rounded mb-2">Set as cover</button>
                                <button className="bg-gray-300 text-gray-700 py-1 px-3 rounded">Change image</button>
                            </div>
                        </div>
                        <button className="bg-gray-300 text-gray-700 py-1 px-3 rounded">Add Photo</button>
                    </div>

                    <div className="mb-4">
                        <TextField
                            className={"bg-white"}
                            onChange={handleDescriptionChange}
                            label="Description"
                            error={desc.length >= maxDescLength}
                            multiline
                            minRows={2}
                            placeholder={'Introduce your recipe'}
                            fullWidth
                            inputProps={{maxLength: maxDescLength}}
                        />
                        <p className={"text-gray-500 text-right text-sm"}>{desc.length}/{maxDescLength}</p>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Ingredients:</label>
                        <div className="space-y-2">
                            <TextField className={"bg-white"} size={"small"} fullWidth placeholder="1 x cup beans"/>
                            <TextField className={"bg-white"} size={"small"} fullWidth placeholder="1 x cup corn"/>
                            <button className="text-primary hover:text-accent">+ Ingredient</button>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Instructions:</label>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-500">Step 1</span>
                                <TextField className={"bg-white"} size={"small"} multiline fullWidth placeholder="Preheat oven to 350 degrees F (175 degrees C)."/>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-500">Step 2</span>
                                <TextField className={"bg-white"} size={"small"} multiline fullWidth placeholder="In a medium bowl, mix together beans, corn, salsa, taco seasoning"/>
                            </div>
                            <button className="text-primary hover:text-accent">+ Step</button>
                        </div>
                    </div>

                    <div className="mb-4 w-1/4">
                        <label className="block text-gray-700 mb-2">Servings:</label>
                        <TextField className={"bg-white"} size={"small"} type={"number"} fullWidth placeholder="#"/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Cooking Time:</label>
                        <div className="flex space-x-2">
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className={"flex"}>
                            <Select
                                onChange={handleHourChange}
                                labelId="demo-simple-select-disabled-label"
                                id="demo-simple-select-disabled"
                                value={hoursCooking}
                                label="Minutes">
                                {numbersHours.map((number) => (
                                    <MenuItem key={number} value={number}>
                                        {number}
                                    </MenuItem>
                                ))}
                            </Select>
                                <Select
                                    onChange={handleMinuteChange}
                                    labelId="demo-simple-select-disabled-label"
                                    id="demo-simple-select-disabled"
                                    value={minutesCooking}
                                    label="Minutes">
                                    {numbersMinutes.map((number) => (
                                        <MenuItem key={number} value={number}>
                                            {number}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Prep Time:</label>
                        <div className="flex space-x-2">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <TimePicker className={"bg-white"} views={['minutes', 'seconds']} format="hh:mm" />
                            </LocalizationProvider>
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
                </div>
            </main>
        </>
    );
}

export default RecipeEditor;

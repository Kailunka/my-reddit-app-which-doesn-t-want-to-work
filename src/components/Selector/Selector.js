import Select from 'react-select';
import React from 'react';
import makeAnimated from 'react-select/animated';
import "./Selector.css";

const animatedComponents = makeAnimated();

const customStyles = {
    control: (provided) => ({
        ...provided,
        borderRadius: '8px', // Rounded corners
        border: '2px solid #ccc', // Custom border
        boxShadow: 'none', // Remove default shadow
        padding: '5px', // Padding for better spacing
        width: '100%', // Full width within its container
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: '8px',
        marginTop: '5px',
    }),
    multiValue: (provided) => ({
        ...provided,
        backgroundColor: '#f1f1f1',
        borderRadius: '4px',
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        color: '#333',
    }),
    multiValueRemove: (provided) => ({
        ...provided,
        color: '#999',
        ':hover': {
            backgroundColor: '#e57373',
            color: 'white',
        },
    }),
};

export const Selector = ({ data, handleChange, isMulti }) => { // Use isMulti prop
    return (
        <div className='selector-container'>
            <Select
                className='selector'
                closeMenuOnSelect={!isMulti} // Close the menu if not multi-select
                components={animatedComponents}
                isMulti={isMulti} // Dynamically set isMulti
                defaultValue={[]}
                options={data}
                onChange={handleChange}
                styles={customStyles}
            />
        </div>
    );
};

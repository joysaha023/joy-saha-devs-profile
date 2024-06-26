import React from 'react';

const SkillBox = ({item}) => {
    const {image, name} = item;
    
    return (
        <div className=''>
            <div className='border w-[151px] h-[91px]'>
            <img className='w-[50px] h-[50px] ' src={image} alt={name} />
            <h1>{name}</h1>
            </div>
        </div>
    );
};

export default SkillBox;
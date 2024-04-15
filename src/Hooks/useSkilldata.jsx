import React, { useEffect, useState } from 'react';


const useSkilldata = () => {
    const [skill, setSkill] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("skill.json");
            const data = await res.json();
            setSkill(data)
        }
        fetchData()
    }, [])


    return {skill};
};

export default useSkilldata;
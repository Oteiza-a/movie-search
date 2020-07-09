import React from 'react';

//cuando exportamos un Componente sin la palabra default, como es este caso,
//deberemos importarlo entre llaves, import { Title } from, en el otro archivo

export const Title = ({ children }) => (
    <p className="title is-1">{children}</p>
)
import React from 'react';
import { Helmet } from 'react-helmet';


const Pagetitle = ({title}) => {
    return (
     
            <Helmet>
                <title>{title}</title>
            </Helmet>
 
    );
};

export default Pagetitle;
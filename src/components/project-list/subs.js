import React, {Component} from 'react';

//React components
const GenerateProjects = (props) => { 
    const list = props.projectData.map((projects, index) => {
        return (
        	<div>
        		<svg height="10" width="10">
  					<circle cx="5" cy="5" r="5" fill={projects.color} />>
				</svg>
	        	<li key={index}>{projects.name}<span onClick={() => props.removeProject(index)}> -</span></li>
        	</div>
        );
    });

    return (
    	<ul
    		className={props.className}>
    		{list}
  		</ul>
  	);
};

export default GenerateProjects;
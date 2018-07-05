import React, {Component} from 'react';
import projects from '../data/projects.json';
import Project from './Project.js';

export class Projects extends Component {

    //imgName   title   description
    render(){
        return(
           <div>
               {projects.allProjects.map((x)=>{
                   return <Project imgName={x.imgName} title={x.title} description={x.description} />
               })}

            </div>
        );

    };

}
export default Projects;

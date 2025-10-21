/* React Imports */
import { ShortIntro, ShortIntroTitle } from './shared/shortintro/ShortIntro.js';
import ShortIntroMedia from './shared/shortintro/ShortIntroMedia.jsx';

/* Style Imports */
import './Vulkan.css'; // Import your CSS file

/* HTML */
export default function Vulkan() 
{
    return (
        <div className='vulkan'>
            <ShortIntro>
                <div>
                    <ShortIntroTitle>
                        Quick Overview
                    </ShortIntroTitle>
                    <p>
                        Tectonic Short Text
                    </p>
                    </div>
                <ShortIntroMedia MediaFilePath='./assets/ProjectImages/Vulkan/Trailer.webm' />
            </ShortIntro>
            <h2>The Project</h2>
            <p>
                I have created, an application with the Vulkan API, that allows for instanced rendering of 2D and 3D objects. 
                This project had a really steep learning curve. We got started by setting a whole load of Vulkan objects, before we could even get started on setting up the pipeline.
                So then when I finally managed to render a triangle with a simple 2D pipeline you know that it felt incredible. 
                Adding a camera and setting up a 3D pipeline with simple diffuse textures really was a great next step. 
                Only then could I start working on the instanced rendering.
                As a challenge for myself I decided to template the pipeline so that I could decide to have 2D and 3D vertices or any new type of vertex rendering at the same time.
                Included is a custom .obj file parser for simple meshes containing vertex locations, texture coordinates and normals. 
            </p>
            <img
                className='img-1'
                src='./assets/ProjectImages/Vulkan/RenderingTriangles.png'
                alt='thumbnail'
            />
            <img
                className='img-2'
                src='./assets/ProjectImages/Vulkan/NotInstanceRendering.png'
                alt='thumbnail'
            />
            <img
                className='img-3'
                src='./assets/ProjectImages/Vulkan/Overview.png'
                alt='thumbnail'
            />
            <h2>Specifications</h2>
            <p>
                I decided to use the C++ version of the Vulkan API, so that I could stick to my roots as much as possible. 
                All the dependencies and libraries are imported using CMAKE.
                There is a release version available on github showcasing 2D and 3D instanced rendering and a crazy amount of frames per second.
            </p>
            <p>
                Check out this beautiful display of 10'000 ferrari's (modeled by me) consisting of 2008 vertices running at an average 90 frames per second. 
            </p>
        </div>
    )
}
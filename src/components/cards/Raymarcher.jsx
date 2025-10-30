/* React Imports */
import { ShortIntro, ShortIntroTitle } from './shared/shortintro/ShortIntro.js';
import ShortIntroMedia from './shared/shortintro/ShortIntroMedia.jsx';

/* Style Imports */
import './Raymarcher.css';

/* HTML */
export default function Raymarcher() 
{
    return (
        <div className='Raymarcher'>
            <ShortIntro>
                <div>
                    <ShortIntroTitle>
                        Quick Overview
                    </ShortIntroTitle>
                    <p>
                        Ray marcher Short Text
                    </p>
                </div>
                <ShortIntroMedia MediaFilePath='./assets/ProjectImages/RayMarcher/Trailer.webm' />
            </ShortIntro>
            <h2>The Project</h2>
            <p>
                As my recent interest in graphics programming has risen,
                I decided to look into sphere tracing on my own. 
                I used the framework of a previously made raytracer, and transformed it into a spheretracing raymarcher.<br/>
                This project was made completely on the cpu, so to at least achieve some frames to look at the beautiful scenes,
                I had to make the application multi-threaded. <br/>
                Later, I would like to port this to Vulkan, to experiment some more and have some decent performance.  
                My main resource I used was the work of Inigo Quilez.<br/>
                It resulted in these really wonky visuals. I had a blast discovering this mathemathical method of rendering.<br/>
            </p>
            <video
                className='SphereBoxShow'
                autoPlay
                loop
                muted
            >
                <source src='./assets/ProjectImages/RayMarcher/Cubespheresmooth.webm' />
                Your browser does not support the video tag.
            </video>
            <video
                className='FractalsRotatedShow'
                autoPlay
                loop
                muted
            >
                <source src='./assets/ProjectImages/RayMarcher/Fractalsrotation.webm' />
                Your browser does not support the video tag.
            </video>
            <video
                className='FractalsShow'
                autoPlay
                loop
                muted
            >
                <source src='./assets/ProjectImages/RayMarcher/Mandelbulb.webm' />
                Your browser does not support the video tag.
            </video>
            <h2>What is sphere tracing in ray marching?</h2>
            <p>
              In raytracing you shoot a ray into the scene from the camera pov and calculate the intersection point of a ray. 
              In sphere tracing you still shoot a ray from the camera, but you calculate the distance from the current point (initially the camera) to the closest object.
              Once you know the minimum distance to the closest object you know that you can travel along the ray to that minimum distance and get a new current point.
              And you repeat these steps until the minimum distance to the closest object is smaller than an arbitrary value (0.001) and you know you have hit something.
            </p>
            <h2>Some Cool Examples</h2>
            <div className='video-container video-container-left'>
                <video className='SphereBox' autoPlay loop muted>
                    <source src='./assets/ProjectImages/RayMarcher/Cubespheresmooth.webm' />
                    Your browser does not support the video tag.
                </video>
                <p className='video-description'>
                    On the left here you'll find my first attempt figuring some <strong>basic</strong> formula's out.
                    It uses the signed distance formula's for a sphere, a cube, and a plane.<br/>
                    It might look like all objects are lit and use normals,
                    but it actually cleverly remaps the value of how far the ray travelled in the scene to a black and white colour. <br/>
                    When the shpere or cube overlaps with the plane it takes whatever is closest.
                    However when they overlap with eachother a smooth minimum of the objects is taken.
                    Resulting in this cool slimey effect.
                </p>
            </div>

            <div className='video-container video-container-right'>
                <video className='FractalsRotated' autoPlay loop muted>
                    <source src='./assets/ProjectImages/RayMarcher/Fractalsrotation.webm' />
                    Your browser does not support the video tag.
                </video>
                <p className='video-description'>
                    This second frame is me exploring something similar to instanced rendering.
                    There is but one cube in this scene. <br/>
                    When calculating the distance to this cube we pass along the point in space where the raymarcher is querying from.
                    By remapping this point in the zero to one space, we can hit the same cube at different distances in space.<br/>
                    As the ray travels further into the scene a stronger rotation is applied to it.<br/>
                    The scene is now also coloured but it is still using a remap formula based on distance (Inigo Quilez).
                </p>
            </div>
            <div className='video-container video-container-left'>
                <video className='Fractals' autoPlay loop muted>
                    <source src='./assets/ProjectImages/RayMarcher/Mandelbulb.webm' />
                    Your browser does not support the video tag.
                </video>
                <p className='video-description'>
                    For the final frame I present to you the MandelBulb, a manifestation of the Mandelbrot set.<br/>
                    If you had a super computer and a crazy amount of GPU-power you can keep zooming in and keep discovering more detail.<br/>
                    To visualize this shape I needed some form of ambient occlusion, otherwise you can't really see the detail.
                    To achieve this in a cheap manner, I used the number of steps the ray had to take to hit a point.<br/>
                    After updating one of the values in the complex sdf, it resulted in this cool animated MandelBulb.  
                </p>
            </div>
        </div>
    )
}
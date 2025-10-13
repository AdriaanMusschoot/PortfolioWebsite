/* Style Imports */
import '../../styles/cards/PhysicsPrediction.css'; 

/* HTML */
export default function PhysicsPrediction() {

  return (
    <div className='PhysicsPrediction'>
        <h2>
            Physics Simulation
        </h2>
            <p>
                In a physics simulation you aim to reproduce real-world events using computational power. 
                This is done using mathematical equations (more in depth about those later). 
                Loads of external factors have to be accounted for when trying to recreate such phenomena. 
                It is up to the creator of such a simulation how many factors you include for more accuracy.
                The accuracy depends on the purpose of the simulation. 
                If it were for scientific research accuracy is of the utmost importance. 
                If it were to simulate physics in a videogame, you would prioritize real world performance and keep it simple.
            </p>
        <img
            className='prediction-gif'
            src='./assets/ProjectImages/TrajectoryPrediction/PhysicsSimulation.gif'
            alt='thumbnail'
        />
        <h2>
            3D Unity Scene: Ball Simulation
        </h2>
            <p>
                For my own implementation of this topic, 
                I chose to recreate a scene in which a sphere continuously updates its position according to the laws of physics and in which 6 walls create a simple room to use as a collision system. 
                The ball does not only update its position, but you are also able to see its predicted trajectory. I am not using built-in logic from Unity itself for physics nor for collisions, everything is homemade.
                Unity is used for its 3D environment, rendering of the sphere and walls and visualization of the predicted trajectory.
            </p>
        <h3>
            A. Updating the Ball
        </h3>
            <p>
                &nbsp;&nbsp;&nbsp;● Formula: p = v * t<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- p = position<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- v = velocity<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- t = time (in my case Unity's Time.deltaTime is always used, since it is a realtime calculation)
            </p>
        <h3>
            B. Collision
        </h3>
            <p>
                Happens after you have updated the sphere to its new velocity.
            </p>
        <h4>
            1. Collision check<br/>
        </h4>
            <p>
                &nbsp;&nbsp;&nbsp;● Formula: d = r<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - d = distance between plane and sphere center<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - r = radius sphere<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - if true they are colliding<br/>
            </p>
        <h4>
            2. Restore to position right before hitting the plane<br/>
        </h4>
            <p>
                &nbsp;&nbsp;&nbsp;● Formula: p = n * (r - d)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - p = collision point<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - n = normal of colliding plane<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - r = radius sphere<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - d = distance between plane and sphere center<br/>
            </p>
        <h4>
            3. Reflect<br/>
        </h4>
            <p>
                &nbsp;&nbsp;&nbsp;● Formula: v1 = v0 - 2 * v * n * n<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - v0 = incoming velocity<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - v1 = outgoing velocity<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - n = normal of the colliding surface<br/>
            </p>
        <h4>
            4. Apply elasticity (explained in parameters)
        </h4>
        <h3>
            C. Parameters Of Choice
        </h3>
        <p>
            I decided that since it is a realtime application I would take the following factors into account:
        </p>
        <h4>1. Mass, weight of the sphere, determines the:</h4>
            <p>
                &nbsp;&nbsp;&nbsp;● intensity of gravity.<br/>
                &nbsp;&nbsp;&nbsp;● intensity of drag.<br/>
                &nbsp;&nbsp;&nbsp;● intensity of acceleration.<br/>
                &nbsp;&nbsp;&nbsp;● intensity of collision.<br/>
            </p>
        <h4>2. Gravity</h4>
            <p>
                &nbsp;&nbsp;&nbsp;● It is a constant (in my case -9.81).<br/>
                &nbsp;&nbsp;&nbsp;● Combined with the mass it determines the vertical acceleration.<br/>
                &nbsp;&nbsp;&nbsp;● Formula: F = m * g<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - F = gravity force<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - m = mass<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - g = gravity constant (9.81)<br/>
            </p>
        <h4>3. Drag</h4>
            <p>
                &nbsp;&nbsp;&nbsp;● It is the force acting opposite to velocity with respect to air resistance.<br/>
                &nbsp;&nbsp;&nbsp;● Formula: F = 0.5 * Cd * r * A * V^2 / m<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - F = drag force<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - Cd = drag coefficient<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - r = air density<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - A = surface area <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - V = velocity<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - m = mass<br/>
                &nbsp;&nbsp;&nbsp;● The greater the velocity the greater the drag force.<br/>
                &nbsp;&nbsp;&nbsp;● The greater the mass the smaller the drag force.<br/>
                &nbsp;&nbsp;&nbsp;● The greater the Cd value the greater the drag force.<br/>
                &nbsp;&nbsp;&nbsp;● All other parameters can be modified but are kept constant for simplicty.<br/>
                &nbsp;&nbsp;&nbsp;● The surface of a sphere will always have the same surface area in any direction.<br/>
            </p>
        <h4>4. Acceleration</h4>
            <p>
                &nbsp;&nbsp;&nbsp;● It will update the velocity every frame. In this case it will decelerate the sphere until is stationary.<br/>
                &nbsp;&nbsp;&nbsp;● It is a vector that combines the drag and gravity forces.<br/>
                &nbsp;&nbsp;&nbsp;● Formula: a = m * (d + g)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - a = acceleration<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - m = mass<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - d = drag<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - g = gravity (note: this is only for the y-component of the vector)<br/>
            </p>
        <h4>5. Velocity</h4>
            <p>
                &nbsp;&nbsp;&nbsp;● It will update the position of the sphere every frame. <br/>
                &nbsp;&nbsp;&nbsp;● Formula: v1 = v0 + a * t<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - v1 = velocity after accelaration<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - v0 = velocity before accelaration<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - a = acceleration<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - t = time (in my case Unity's Time.deltaTime is always used, since it is a realtime calculation)<br/>
            </p>
        <h4>6. Elasticity</h4>
            <p>
                &nbsp;&nbsp;&nbsp;● Every plane/surface has an elasticity factor between 0 and 1.<br/>
                &nbsp;&nbsp;&nbsp;● Upon collision the outgoing velocity is multiplied by this factor. <br/>
                &nbsp;&nbsp;&nbsp;● 0 meaning a perfectly inelastic collision (all momentum gone).<br/>
                &nbsp;&nbsp;&nbsp;● 1 meaning a perfectly elastic collision (all momentum is maintained).<br/>
                &nbsp;&nbsp;&nbsp;● All 6 planes have different elasticity/bounce values to test different circumstances.<br/>
                &nbsp;&nbsp;&nbsp;● Formula: v1 = v0 * e / m<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - v1 = veloctiy after elasticity<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - v0 = velocity before elasticity<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - e = elasiticy<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - m = mass<br/>
                &nbsp;&nbsp;&nbsp;● The greater the mass the less elastic the collision will be.<br/>
            </p>
        <h3>
            D. Trajectory Prediction
        </h3>
            <p>
                To predict the trajectory I use a hypothetical ball and velocity. You can choose how many steps of the trajectory are predicted (collision included). 
                I then store all the points and add them to Unity's line renderer component.
            </p>
        <h3>
            E. Result
        </h3>
            <p>
                The result is a simple simulation where you can change the following parametrers: 
                mass, initial velocity, steps, Cd (drag coefficient). 
                After changing those you immediatly get a preview of an updated trajectory. 
                It is also possible to dive in the code to modify some constants such as the bounce factor of a plane, 
                the surface and radius of the ball, etc. Here is a .GIF file of the main functionality of my project. 
            </p>
        <h3>
            F. Progress
        </h3>
            <p>
                It was useful that I could complete this project in Unity. 
                I was able to start with some built-in components and use my own implementations later on.
                At first I was using the built-in OnTriggerEnter() function 
                for my planes to calculate when a collision would occur.
                I later created my own cartesian planes in my physics script.
                This would prove useful in the future for collisions when predicting the trajectory.
            </p>
        <h3>
            G. Conclusion
        </h3>
            <p>
                This project is but a first step in the exploration of what physics simulations are capable of. It is a neat and simplified version of physics that anyone can use. The next steps are to integrate more parameters such as angular velocity for the ball, wind etc. I could also implement more complex collisions.
            </p>
        <h3>
            H. References/Sources
        </h3>
            <p>
                ● De Pauw, I., & Masselis, B. (2021). Animation Maths. Lannoo Campus. https://www.ecampuslearn.com<br/>
                &nbsp;&nbsp;&nbsp;Chapter 9.3 Translational motion<br/>
                &nbsp;&nbsp;&nbsp;Chapter 9.6 Independence of motion<br/>
                &nbsp;&nbsp;&nbsp;Chapter 10.1 Collision detection using circles and spheres<br/><br/>
                ● Falling object with air resistance. (s.d.).<br/>
                &nbsp;&nbsp;&nbsp;https://www.grc.nasa.gov/www/k-12/VirtualAero/BottleRocket/airplane/falling.html<br/><br/>
                ● Vedantu. (s.d.). Density of Air. VEDANTU. https://www.vedantu.com/physics/density-of-air<br/><br/>
                ● Ten Minute Physics. (2021, 28 augustus). 01 - Writing a physics simulation in 10 minutes [Video].<br/> 
                &nbsp;&nbsp;&nbsp;YouTube. https://www.youtube.com/watch?v=oPuSvdBGrpE<br/><br/>
                ● ForlornU. (2023, 28 mei). Projectile Trajectory Predictor - Unity Physics & Coding Tutorial [Video]. <br/>
                &nbsp;&nbsp;&nbsp;YouTube. https://www.youtube.com/watch?v=rgJGkYM2_6E<br/><br/>
                ● contour3D. (2020, 4 november). Draw lines in 3D using LineRenderer [Video].<br/>
                &nbsp;&nbsp;&nbsp;YouTube. https://www.youtube.com/watch?v=mgmfZRllpzs<br/>
            </p>
    </div>
  );
}